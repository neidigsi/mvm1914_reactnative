import React, { useState, useEffect } from 'react';
import { API } from "@env";
import EventList from '../../components/lists/tabLists/EventList';
import TabLayout from '../../components/tabs/TabLayout';
import { http } from '../../networking/HttpRequest';

interface IEvent {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  allDayEvent: boolean;
  categories: string[];
  location: {
    id: number;
    name: string;
    street: string;
    plz: string;
    city: string;
    state: string;
    country: string;
    latitude: string;
    longitude: string;
  };
  thumbnailLink: string;
}

const EventsScreen = ({ navigation }: any) => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [state, setState] = useState({
    index: 0,
    routes: [
      { key: 'all', title: 'Alle' },
      { key: 'go', title: 'Großes Orchester' },
      { key: 'jo', title: 'Jugendorchester' },
      { key: 'hem', title: 'Horsch e-mol(l)' },
      { key: 'jb', title: 'Juniorband' },
      { key: 'fg', title: 'Flötengruppe' },
      { key: 'ff', title: 'Frühförderung' },
    ]
  });

  useEffect(() => {
    const getEvents = async () => {
      const eventsFromServer = await fetchEvents();
      setEvents(eventsFromServer);
      setLoading(false);
    }
    getEvents();
  }, []);

  // Fetch events from rest-api
  const fetchEvents = async () => {
    const data = await http(`${API}/event`, "GET", {})
    data.sort((a: any, b: any) => {
      return a.startDate < b.startDate ? -1 : 1;
    });
    return data;
  }

  const renderScene = ({ route, jumpTo }: any) => {
    switch (route.key) {
      case "all":
        return <EventList index={0} navigation={navigation} events={events} loading={loading} />;
      case "go":
        return <EventList index={1} navigation={navigation} events={events.filter(event => event.categories.includes("Großes Orchester"))} loading={loading} />;
      case "jo":
        return <EventList index={2} navigation={navigation} events={events.filter(event => event.categories.includes("Jugendorchester"))} loading={loading} />;
      case "hem":
        return <EventList index={3} navigation={navigation} events={events.filter(event => event.categories.includes("Horsch e-mol(l)"))} loading={loading} />;
      case "jb":
        return <EventList index={4} navigation={navigation} events={events.filter(event => event.categories.includes("Juniorband"))} loading={loading} />;
      case "fg":
        return <EventList index={5} navigation={navigation} events={events.filter(event => event.categories.includes("Blockflötengruppen"))} loading={loading} />;
      case "ff":
        return <EventList index={6} navigation={navigation} events={events.filter(event => event.categories.includes("Musikalische Frühförderung"))} loading={loading} />;
    }
  };

  return (
    <TabLayout
      title="Veranstaltungen"
      scene={renderScene}
      state={state}
      setState={setState}
    />
  );
}

export default EventsScreen;