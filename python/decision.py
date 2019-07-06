# Import socket module
import socket
import requests
import time
def func():
    snake=1
    budget=100000
    area=100
    if(snake):
        if(area>50):
            if(budget>1000000):
                return 0
            elif(budget>=300000 and budget<=1000000):
                return 1
            else:
                return 2
        else:
            if(budget>1000000):
                return 3
            elif(budget>=300000 and budget<=1000000):
                return 4
            else:
                return 5

    else:
        if(area>50):
            if(budget>1000000):
                return 6
            elif(budget>=300000 and budget<=1000000):
                return 7
            else:
                return 8
        else:
            if(budget>1000000):
                return 9
            elif(budget>=300000 and budget<=1000000):
                return 10
            else:
                return 11
        
        
def controlvalues():
    # Create a socket object
    s = socket.socket()         

# Define the port on which you want to connect
    port = 12472              
 
# connect to the server on local computer
    s.connect(('', port))
 
# receive data from the server
    print ((s.recv(1024)).decode())
    while True:
        #get the data from serial port
        latlong = (s.recv(1024)).decode()
        if(latlong!=""):
            b=func()
            print(b)
            print(latlong)
    
# close the connection
    s.close()
