# issue-tracker
It's like thought log for JIRA (aka RAIJ)


To start IT: yarn run start

# how to push a pull request to Github
`git status`: check out which files have changed, and which you have staged for commit
`git add <filename` or `git add .`: stage files for commit (or add all in current directory and below)
`git commit` or `git commit -m "commit message"`: commit changes that have been staged
`git log`: examine list of commits for current branch. after committing you should see your commit here
`git branch`: examine list of local branches
`git checkout <branchname>`: switch to a branch
`git checkout -b <newbranchname>`: create new branch
`git push origin <branchname>`: push to Github repo on branchname. can't push to master because it's protected
`git remote update`: update local caches of remote branches
`git checkout -b <newbranchname> origin/master`: create new branch on top of most recent cache for origin/master
