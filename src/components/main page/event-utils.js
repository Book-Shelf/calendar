
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr,
    className: "group1Event",
    eventGroupId: "group1" //ID grupy, chwilowo nazwa
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00',
    className: "group2Event",
    eventGroupId: "group2"
  }
]

export function createEventId() {
  return String(eventGuid++)
}
