import { useState } from "react";

import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvents, setcurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a title for your event");
    const calenderApi = selected.view.calendar;
    calenderApi.unselect();
    if (title) {
      calenderApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Do you want to delete this event'${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header
        title="Calender Page"
        subtitle="Full Calender interaction page"
      ></Header>

      <Box justifyContent="space-between" display="flex">
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((events) => (
              <ListItem
                key={events.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={events.title}
                  secondary={
                    <Typography>
                      {" "}
                      {formatDate(events.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setcurrentEvents(events)}
            initialEvents={[
              {
                id: "1234",
                title: "All-day event",
                date: "2022-11-14",
              },
              {
                id: "1235",
                title: "Timed event",
                date: "2022-11-28",
              },
            ]}
          ></FullCalendar>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
