const {delayQueuedTask} = require('./tasks');
const express = require("express");
const celery = require("./celery.config")


// Initialize Express
const app = express()


app.get("", async (req, res)=> {

    try{
      await delayQueuedTask()
      return res.json({"Message":"task queued, check celery logs!"})

    } catch(err) {
        console.log(err)
    }
})


celery.init().then(() => {
    app.listen(8000)
  }).catch(err => {
    console.log(err)
  })