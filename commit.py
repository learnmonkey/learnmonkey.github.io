# You can use this file to more easily commit to Learnmonkey if you are using the command line.
# Use: python commit.py [your commit message here]
# We'll make it into a CLI later...

import os
import sys
del sys.argv[0]
os.system("git pull")
os.system("git add -A")
os.system(f"""git commit -m "{' '.join(sys.argv)}" -- .""")
os.system("git pull")
os.system("git checkout backup")
os.system("git merge main")
os.system("git checkout main")
os.system("git push")
