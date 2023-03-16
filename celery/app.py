from celery import Celery


app = Celery('python_celery', broker='amqps://jqdjczml:wVihh1Yey_UtdpuEdxC-Bjef2kcxhzRu@hummingbird.rmq.cloudamqp.com/jqdjczml',task_serializer='json')


@app.task(serializer='json')
def asyncTask(*args, **kwargs):
    print("Recieved")
    return