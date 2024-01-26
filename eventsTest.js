/*
The events module allows developers to make events listen and fire when it triggered.
*/
// Including the events module:
var events = require("events");

// The events module requires a event object
var eventEmitter = new events.EventEmitter();

// This creates an event handler which is what you want to happen when an event is triggered
var handler = function () {
  console.log("This event has been triggered.");
};

// This assigns the event handler to the specific trigger or event.
// The first argument is the event or trigger, and the second argument is the handler for the event.
eventEmitter.on("trigger", handler);

// this fires a specific event or trigger.
eventEmitter.emit("trigger");
