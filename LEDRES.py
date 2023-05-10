import RPi.GPIO as GPIO
from time import sleep

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(2,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(3,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(4,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(14,GPIO.OUT,initial=GPIO.LOW)


while True:
    GPIO.output(2,GPIO.HIGH)
    #sleep(1)
    GPIO.output(4,GPIO.HIGH)
    sleep(1)
    GPIO.output(2,GPIO.LOW)
    #sleep(1)
    GPIO.output(4,GPIO.LOW)
    sleep(1)
    GPIO.output(3,GPIO.HIGH)
    #sleep(1)
    GPIO.output(14,GPIO.HIGH)
    sleep(1)
    GPIO.output(3,GPIO.LOW)
    #sleep(1)
    GPIO.output(14,GPIO.LOW)
    sleep(1)