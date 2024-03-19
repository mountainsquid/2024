# grabs IP of the computer and puts it in a text file

import requests
import os

def get_public_ip():
    try:
        response = requests.get('https://api.ipify.org')
        return response.text
    except Exception as e:
        return str(e)

def write_ip_to_file(ip_address):
    downloads_directory = os.path.expanduser("~/Downloads")
    file_path = os.path.join(downloads_directory, "IP.txt")

    with open(file_path, 'w') as file:
        file.write(ip_address)

    print(f"IP address written to 'IP.txt' at: {file_path}")

if __name__ == "__main__":
    public_ip = get_public_ip()
    write_ip_to_file(public_ip)
