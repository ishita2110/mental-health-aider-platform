import random
import json
import time
from faker import Faker
from datetime import datetime

fake = Faker()

departments = [
    "Engineering",
    "Sales",
    "HR",
    "Support",
    "Finance",
    "Marketing"
]

moods = [
    "happy",
    "neutral",
    "sad",
    "anxious",
    "burned_out"
]

def generate_event():

    event = {
        "employee_id" : random.randint(1000, 1100),
        "employee_name" : fake.name(),
        "department" : random.choice(departments),
        "mood" : random.choice(moods),
        "stress_level" : random.randint(1,10),
        "sleep_hours" : random.randint(3,9),
        "workload" : random.randint(1,10),
        "timestamp" : str(datetime.now())
    }

    return event

while True:

    event = generate_event()

    with open("events.json", "a") as f:
        f.write(json.dumps(event) + "\n")

    print(event)

    time.sleep(1)