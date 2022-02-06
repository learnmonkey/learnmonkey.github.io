# You can use this file to more easily commit to Learnmonkey if you are using the command line.
# It will commit your changes and update the backup branch.
# Use: python commit.py [your commit message here]
# We'll make it into a CLI soon...

import os
import sys
del sys.argv[0] # the text "commit.py" is part of argv
if sys.argv[0] == "-n":
	del sys.argv[0]
	os.system("git pull") # update local clone
	os.system("git add -A") # add changes
	os.system(f"""git commit -m "{' '.join(sys.argv)}" -- .""") # commit code
	os.system("git push") # push local commits
else:
	os.system("git pull") # update local clone
	os.system("git add -A") # add changes
	os.system(f"""git commit -m "{' '.join(sys.argv)}" -- .""") # commit code
	os.system("git push") # push local commits
	os.system("git checkout backup") # switch to backup branch
	os.system("git merge main")# update backup with main
	os.system("git push")# push new backup branch with changes
	os.system("git checkout main") # switch back to main branch