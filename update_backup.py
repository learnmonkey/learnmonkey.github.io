# Updates the backup branch
# python update_backup.py

import os
os.system("git pull")
os.system("git checkout backup")
os.system("git merge main")
os.system("git push")
os.system("git checkout main")