var usernameFld
var passwordFld
var firstNameFld
var lastNameFld
var roleFld
var $createBtn
var theTableBody
var $updateBtn
var $removeBtn
var userService = new UserServiceClient()

var users = [];

function createUser(user) {
    userService.createUser(user)
        .then(function (actualUser) {
            console.log(actualUser.username)
            users.push(actualUser)
            renderUsers(users)
        })
}

var selectedUser = null
function selectUser(event) {
    var selectBtn = jQuery(event.target)
    var theId = selectBtn.attr("id")
    selectedUser = users.find(user => user._id === theId)
    usernameFld.val(selectedUser.username)
    passwordFld.val(selectedUser.password)
    firstNameFld.val(selectedUser.firstName)
    lastNameFld.val(selectedUser.lastName)
    roleFld.val(selectedUser.role)
}

function deleteUser(event) {
    console.log(event.target)
    var deleteBtn = jQuery(event.target)
    var theClass = deleteBtn.attr("class")
    var theIndex = deleteBtn.attr("id")
    var theId = users[theIndex]._id
    console.log(theClass)
    console.log(theIndex)

    userService.deleteUser(theId)
        .then(function (status) {
            users.splice(theIndex, 1)
            renderUsers(users)
        })
}
// <a  class="fas fa-times fa-2x wbdv-delete float-right wbdv-btns" id="${i}" role="button"></a>
// <a  class="fas fa-edit fa-2x wbdv-select float-right wbdv-btns" id="${user._id}" role="button"></a>
function renderUsers(users) {
    theTableBody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        console.log(user.username)
        theTableBody
            .append(`
    <tr>
        <td class="text-center wbdv-user-info-text">${user.username}</td>
        <td class="text-center wbdv-user-info-text">&nbsp;</td>
        <td class="text-center wbdv-user-info-text">${user.firstName}</td>
        <td class="text-center wbdv-user-info-text">${user.lastName}</td>
        <td class="text-center wbdv-user-info-text">${user.role}</td>
            <td><span class="float-right" style="white-space: nowrap">
                <i class="fas fa-times fa-2x wbdv-delete wbdv-btns" id="${i}"></i>
                <i class="fas fa-edit fa-2x wbdv-select wbdv-btns" id="${user._id}"></i>
            </span></td>
    </tr>
  `)
    }
    jQuery(".wbdv-delete")
        .click(deleteUser)
    jQuery(".wbdv-select")
        .click(selectUser)
}


function updateUser() {
    selectedUser.username = usernameFld.val()
    selectedUser.password = passwordFld.val()
    selectedUser.firstName = firstNameFld.val()
    selectedUser.lastName = lastNameFld.val()
    selectedUser.role = roleFld.val()
    // selectedUser = users.find(user => user._id === theId)
    userService.updateUser(selectedUser._id, selectedUser)
        .then(function (status) {
            var index = users.findIndex(user => user._id === selectedUser._id)
            users[index] = selectedUser
            renderUsers(users)
        })
    usernameFld.val("")
    passwordFld.val("")
    firstNameFld.val("")
    lastNameFld.val("")
}

function main() {
    usernameFld = $(".wbdv-username-fld")
    passwordFld = $(".wbdv-password-fld")
    firstNameFld = $(".wbdv-firstName-fld")
    lastNameFld = $(".wbdv-lastName-fld")
    roleFld = $(".wbdv-role-fld")
    $createBtn = $(".wbdv-create-btn")
    $updateBtn = $(".wbdv-update-btn")
    theTableBody = jQuery("tbody")
    $updateBtn.click(updateUser)
    $createBtn.click(() => {
        // console.log(usernameFld.val())
        createUser({
                username: usernameFld.val(),
                password: passwordFld.val(),
                firstName: firstNameFld.val(),
                lastName: lastNameFld.val(),
                role: roleFld.val()
            })
            usernameFld.val("")
            passwordFld.val("")
            firstNameFld.val("")
            lastNameFld.val("")
        }
    )

    userService.findAllUsers()
        .then(function (actualUsersFromServer) {
            users = actualUsersFromServer
            renderUsers(users)
        })
}
jQuery(main)