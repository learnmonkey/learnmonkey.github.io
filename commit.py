# You can use this file to more easily commit to Learnmonkey if you are using the command line.
# It will commit your changes and update the backup branch.
# Use: python commit.py [your commit message here]
# We'll make it into a CLI soon...

import os
import sys
del sys.argv[0]
os.system("git pull")
os.system("git add -A")
os.system(f"""git commit -m "{' '.join(sys.argv)}" -- .""")
os.system("git push")
os.system("git checkout backup")
os.system("git merge main")
os.system("git push")
os.system("git checkout main")