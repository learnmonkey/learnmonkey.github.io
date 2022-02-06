# You can use this file to more easily commit to Learnmonkey if you are using the command line.
# It will commit your changes and update the backup branch.
# Use: python commit.py [your commit message here]
# We'll make it into a CLI soon...

import os
import sys
if len(sys.argv) == 1:
	print("""
usage:
    python commit.py [options] commit message

commit options:
    default:   commit local changes and update the backup branch too
    `-b`:      update the backup branch only and commit local commits and changes
    `-n`:      commit local changes but don't update the backup branch

always update the backup branch with your commits UNLESS your commiting something risky/dangerous to main or modifying the main branch (i.e. remove commits)

""")
else:
	del sys.argv[0] # the text "commit.py" is part of argv
	if sys.argv[0] == "-n":
		del sys.argv[0]
		os.system("git pull") # update local clone
		os.system("git add -A") # add changes
		os.system(f"""git commit -m "{' '.join(sys.argv)}" -- .""") # commit code
		os.system("git push") # push local commits
	elif sys.argv[0] == "-b":
		del sys.argv[0]
		os.system("git pull") # update local clone
		os.system("git checkout backup") # switch to backup branch
		os.system("git merge main")# update backup with main
		os.system("git push")# push new backup branch with changes
		os.system("git checkout main") # switch back to main branch
	else:
		os.system("git pull") # update local clone
		os.system("git add -A") # add changes
		os.system(f"""git commit -m "{' '.join(sys.argv)}" -- .""") # commit code
		os.system("git push") # push local commits
		os.system("git checkout backup") # switch to backup branch
		os.system("git merge main")# update backup with main
		os.system("git push")# push new backup branch with changes
		os.system("git checkout main") # switch back to main branch