# import socket
# import requests

# # Receiver listens on port 5001 (you can change if needed)
# UDP_IP = "172.16.44.238"
# UDP_PORT = 5001

# # Backend API (your Express/Node server) where React fetches data
# BACKEND_API = "http://localhost:4000/data"

# # File to store all received messages
# LOG_FILE = "insulin_data.txt"

# sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
# sock.bind((UDP_IP, UDP_PORT))

# print(f"Receiver listening on {UDP_IP}:{UDP_PORT}")

# while True:
#     data, addr = sock.recvfrom(1024)  # buffer size 1024 bytes
#     message = data.decode("utf-8")
#     print(f"Received from {addr}: {message}")

#     # ✅ Save message to file
#     with open(LOG_FILE, "a") as file:
#         file.write(message + "\n")

#     try:
#         # Send received message to backend API
#         requests.post(BACKEND_API, json={"message": message})
#         print("Forwarded to backend API")
#     except Exception as e:
#         print("Error forwarding:", e)


import socket
import requests
import os

# Receiver listens on port 5001 (you can change if needed)
UDP_IP = "172.16.44.238"
UDP_PORT = 5001

# Backend API (your Express/Node server) where React fetches data
BACKEND_API = "http://localhost:4000/data"

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind((UDP_IP, UDP_PORT))

print(f"Receiver listening on {UDP_IP}:{UDP_PORT}")

# File path (will be created if not exists)
file_path = "insulin_data.txt"

while True:
    data, addr = sock.recvfrom(1024)  # buffer size 1024 bytes
    message = data.decode("utf-8")
    print(f"Received from {addr}: {message}")

    # --- Save message to file ---
    try:
        with open(file_path, "a") as f:  # "a" = append mode
            f.write(message + "\n")
        print(f"Saved to {file_path}")
    except Exception as e:
        print("Error writing to file:", e)

    # --- Forward to backend API ---
    try:
        requests.post(BACKEND_API, json={"message": message})
        print("Forwarded to backend API")
    except Exception as e:
        print("Error forwarding:", e)
