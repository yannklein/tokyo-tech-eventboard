import doorkeeper from './assets/doorkeeper.png';
import luma from './assets/luma.png';
import eventbrite from './assets/eventbrite.svg';
import meetup from './assets/meetup.png';
import { GroupType } from './types';

export const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'meetup':
      return meetup;
    case 'eventbrite':
      return eventbrite;
    case 'doorkeeper':
      return doorkeeper;
    case 'luma':
      return luma;
    default:
      return meetup;
  }
};

export const getGroupURL = (group: GroupType) => {
  switch (group.platform) {
    case 'meetup':
      return `https://www.meetup.com/${group.name}`;
    case 'eventbrite':
      return `https://www.eventbrite.com/o/${group.name}`;
    case 'doorkeeper':
      return `https://${group.name}.doorkeeper.jp/`;
      case 'luma':
        return `https://lu.ma/${group.name}`;
    default:
      return `https://www.meetup.com/${group.name}`;
  }
};

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
