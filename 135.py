# this code is where it grabs all the file names in /Downloads directory, then it puts all those file names inside a text file

import os

# Define the path to your Downloads directory
downloads_directory = os.path.expanduser("~/Downloads")

# Get a list of all files in the Downloads directory
files_list = [f for f in os.listdir(downloads_directory) if os.path.isfile(os.path.join(downloads_directory, f))]

# Create the full file path for the output text file
output_file_path = os.path.join(downloads_directory, "downloads_files.txt")

# Write the filenames to the output text file
with open(output_file_path, 'w') as output_file:
    for filename in files_list:
        output_file.write(filename + "\n")

print(f"File 'downloads_files.txt' created at: {output_file_path}")
