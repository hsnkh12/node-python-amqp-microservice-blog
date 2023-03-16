const { celery } = require('./celery.config')


async function delayQueuedTask() {

  const queueName = 'celery';
  const taskName = "app.asyncTask"

  const headers = {
    'task': taskName,
    'id': 'a855b247-8394-4be3-b744-98fa900efcdb',
    'lang': 'py',
    'argsrepr': '',
    'kwargsrepr': '{}'
  }

  const body = {
    args: [],
    kwargs:{"message":"Hey Celery!"}
  }

  const options = {
    headers:headers, 
    contentType:'application/json', 
    contentEncoding:'utf-8',
    deliveryMode: 2

  }
  await celery.channel.assertQueue(queueName);
  await celery.channel.publish('',queueName, Buffer.from(JSON.stringify(body)), options);

}
  
module.exports = {delayQueuedTask}

