#!/usr/bin/python

import sys
import struct
import serial
import time
from subprocess import call

ser = serial.Serial('/dev/tty.usbmodemFA431', 9600)

# Helper function that sends a message to the webapp.
def send_message(message):
   # Write message size.
  sys.stdout.write(struct.pack('I', len(message)))
  # Write the message itself.
  sys.stdout.write(message)
  sys.stdout.flush()


while True:
  s = ser.readline()
  if s:
    send_message('{"message": "boom"}')
  time.sleep(1)

