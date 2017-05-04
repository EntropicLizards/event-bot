require('./models'); // import models into global namespace

class MessageHandler {
  constructor (message) {
    this.message = message;
    this.commands = {
      events: {
        add: this.createEvent,
        edit: this.updateEvent,
        remove: this.deleteEvent,
        list: this.listEvents,
      },
      tz: {
        add: this.addTimezoneToServer,
        list: this.listServerTimezones
      }
    }
  }

  createEvent(args) {
    this.sendWarning("This command has not yet been implemented.");
  }

  updateEvent(args) {
    this.sendWarning("This command has not yet been implemented.");
  }

  deleteEvent(args) {
    this.sendWarning("This command has not yet been implemented.");
  }

  listEvents(args) {
    this.sendWarning("This command has not yet been implemented.");
  }

  addTimezoneToServer(args) {
    this.sendWarning("This command has not yet been implemented.");
  }

  listServerTimezones(args) {
    this.sendWarning("This command has not yet been implemented.");
  }

  sendWarning(response) {
    this.sendResponse(":warning: " + response);
  }

  sendError(response) {
    this.sendResponse(":no_entry: " + response);
  }

  sendResponse(response) {
    if (typeof response == "string") {
      this.message.channel.sendMessage(response);
    } else {
      this.message.channel.sendEmbed(response);
    }
  }

  handleCommand(command, args, allCommands=this.commands) {
    console.log(command, args);
    if (command in allCommands || (command.slice(1)) in allCommands) {
      var commandStep = allCommands[command in allCommands ? command : command.slice(1)];
      console.log(commandStep);
      if (typeof commandStep == "object") {
        if (args.length > 0) {
          return this.handleCommand(args[0], args.slice(1), commandStep)
        } 
      } else {
        commandStep.bind(this)(args);
        return true;
      }
    }
    return false;
  }

  process() {
    var split_command = this.message.content.split(" ");
    var result = this.handleCommand(split_command[0], split_command.slice(1))
    if (!result) {
      this.sendError("Command not found");
    }
  }
}

module.exports = MessageHandler;