package com.example.wbdvsp2103shijinserverjava.services;

import com.example.wbdvsp2103shijinserverjava.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {
    private List<Widget> widgets = new ArrayList<Widget>();
    {
//        Widget w1 = new Widget(123l, "6056f08c37882900179d1c2f", "HEADING", 1, "Welcome to Widgets");
//        Widget w2 = new Widget(234l, "6056f16437882900179d1c31", "PARAGRAPH", 1, "This is a paragraph");
//        Widget w3 = new Widget(345l, "6056f17237882900179d1c32", "HEADING", 2, "Welcome to WebDev");
//        Widget w4 = new Widget(456l, "6056f17237882900179d1c32", "PARAGRAPH", 1, "Lorem ipsum");
//        widgets.add(w1);
//        widgets.add(w2);
//        widgets.add(w3);
//        widgets.add(w4);
    }
    // implement crud operations
    public Widget createWidget(Widget widget) {
        Long id = (new Date()).getTime();
        widget.setId(id);
        widgets.add(widget);
        return widget;
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        List<Widget> ws = new ArrayList<Widget>();
        for(Widget w: widgets) {
            if(w.getTopicId().equals(topicId)) {
                ws.add(w);
            }
        }
        return ws;
    }

    public List<Widget> findAllWidgets() {
        return widgets;
    }


    public Widget findWidgetById(Long id) {
        for(Widget w: widgets) {
            if(w.getId().equals(id)) {
                return w;
            }
        }
        return null;
    }

    public Integer updateWidget(Long id, Widget newWidget) {
        for(int i=0; i<widgets.size(); i++) {
            Widget w = widgets.get(i);
            if(w.getId().equals(id)) {
                widgets.set(i, newWidget);
                return 1;
            }
        }
        return -1;
    }


    public Integer deleteWidget(Long id) {
        int index = -1;
        for(int i=0; i<widgets.size(); i++) {
            Widget w = widgets.get(i);
            if(w.getId().equals(id)) {
                index = i;
            }
        }
        if(index >= 0) {
            widgets.remove(index);
            return 1;
        }
        return -1;
    }



}