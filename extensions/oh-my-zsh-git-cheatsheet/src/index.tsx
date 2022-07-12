import { ActionPanel, List, Action } from "@raycast/api";

type DetailProps = {
  title: string;
};
const Detail: React.FC<DetailProps> = (props) => {
  return <List.Item title={props.title} />;
};
export default function Command() {
  return (
    <List>
      <Detail title="ga:        git add" />
      <Detail title="gaa:       git add --all" />
      <Detail title="g:         git'" />
      <Detail title="ga:        git add'" />
      <Detail title="gaa:       git add --all'" />
      <Detail title="gapa:      git add --patch'" />
      <Detail title="gau:       git add --update'" />
      <Detail title="gav:       git add --verbose'" />
      <Detail title="gap:       git apply'" />
      <Detail title="gapt:      git apply --3way'" />
      <Detail title="gb:        git branch'" />
      <Detail title="gba:       git branch -a'" />
      <Detail title="gbd:       git branch -d'" />
      <Detail title="gbD:       git branch -D'" />
      <Detail title="gbl:       git blame -b -w'" />
      <Detail title="gbnm:      git branch --no-merged'" />
      <Detail title="gbr:       git branch --remote'" />
      <Detail title="gbs:       git bisect'" />
      <Detail title="gbsb:      git bisect bad'" />
      <Detail title="gbsg:      git bisect good'" />
      <Detail title="gbsr:      git bisect reset'" />
      <Detail title="gbss:      git bisect start'" />
      <Detail title="gc:        git commit -v'" />
      <Detail title="gc!:       git commit -v --amend'" />
      <Detail title="gcn!:      git commit -v --no-edit --amend'" />
      <Detail title="gca:       git commit -v -a'" />
      <Detail title="gca!:      git commit -v -a --amend'" />
      <Detail title="gcan!:     git commit -v -a --no-edit --amend'" />
      <Detail title="gcans!:    git commit -v -a -s --no-edit --amend'" />
      <Detail title="gcam:      git commit -a -m'" />
      <Detail title="gcsm:      git commit -s -m'" />
      <Detail title="gcas:      git commit -a -s'" />
      <Detail title="gcasm:     git commit -a -s -m'" />
      <Detail title="gcb:       git checkout -b'" />
      <Detail title="gcf:       git config --list'" />
      <Detail title="gcl:       git clone --recurse-submodules'" />
      <Detail title="gclean:    git clean -id'" />
      <Detail title="gpristine: git reset --hard && git clean -dffx'" />
      <Detail title="gcm:       git checkout $(git_main_branch)'" />
      <Detail title="gcd:       git checkout $(git_develop_branch)'" />
      <Detail title="gcmsg:     git commit -m'" />
      <Detail title="gco:       git checkout'" />
      <Detail title="gcor:      git checkout --recurse-submodules'" />
      <Detail title="gcount:    git shortlog -sn'" />
      <Detail title="gcp:       git cherry-pick'" />
      <Detail title="gcpa:      git cherry-pick --abort'" />
      <Detail title="gcpc:      git cherry-pick --continue'" />
      <Detail title="gcs:       git commit -S'" />
      <Detail title="gcss:      git commit -S -s'" />
      <Detail title="gcssm:     git commit -S -s -m'" />
      <Detail title="gd:        git diff'" />
      <Detail title="gdca:      git diff --cached'" />
      <Detail title="gdcw:      git diff --cached --word-diff'" />
      <Detail title="gdct:      git describe --tags $(git rev-list --tags --max-count=1)'" />
      <Detail title="gds:       git diff --staged'" />
      <Detail title="gdt:       git diff-tree --no-commit-id --name-only -r'" />
      <Detail title="gdup:      git diff @{upstream}'" />
      <Detail title="gdw:       git diff --word-diff'" />
      <Detail title="gf:        git fetch'" />
      <Detail title="gfo:       git fetch origin'" />
      <Detail title="gfg:       git ls-files | grep'" />
      <Detail title="gg:        git gui citool'" />
      <Detail title="gga:       git gui citool --amend'" />
      <Detail title={`ggpull:    git pull origin "\$(git_current_branch)"'`} />
      <Detail title={`ggpush:    git push origin "\$(git_current_branch)"'`} />
      <Detail title="ggsup:     git branch --set-upstream-to=origin/$(git_current_branch)'" />
      <Detail title="gpsup:     git push --set-upstream origin $(git_current_branch)'" />
      <Detail title="ghh:       git help'" />
      <Detail title="gignore:   git update-index --assume-unchanged'" />
      <Detail title={`gignored:  git ls-files -v | grep "^[[:lower:]]"'`} />
      <Detail title="git-svn-dcommit-push='git svn dcommit && git push github $(git_main_branch):svntrunk'" />
      <Detail title="gk:        \gitk --all --branches &!'" />
      <Detail title="gke:       \gitk --all $(git log -g --pretty=%h) &!'" />
      <Detail title="gl:        git pull'" />
      <Detail title="glg:       git log --stat'" />
      <Detail title="glgp:      git log --stat -p'" />
      <Detail title="glgg:      git log --graph'" />
      <Detail title="glgga:     git log --graph --decorate --all'" />
      <Detail title="glgm:      git log --graph --max-count=10'" />
      <Detail title="glo:       git log --oneline --decorate'" />
      <Detail title="glog:      git log --oneline --decorate --graph'" />
      <Detail title="gloga:     git log --oneline --decorate --graph --all'" />
      <Detail title="gm:        git merge'" />
      <Detail title="gmom:      git merge origin/$(git_main_branch)'" />
      <Detail title="gmtl:      git mergetool --no-prompt'" />
      <Detail title="gmtlvim:   git mergetool --no-prompt --tool=vimdiff'" />
      <Detail title="gmum:      git merge upstream/$(git_main_branch)'" />
      <Detail title="gma:       git merge --abort'" />
      <Detail title="gp:        git push'" />
      <Detail title="gpd:       git push --dry-run'" />
      <Detail title="gpf:       git push --force-with-lease'" />
      <Detail title="gpf!:      git push --force'" />
      <Detail title="gpoat:     git push origin --all && git push origin --tags'" />
      <Detail title="gpr:       git pull --rebase'" />
      <Detail title="gpu:       git push upstream'" />
      <Detail title="gpv:       git push -v'" />
      <Detail title="gr:        git remote'" />
      <Detail title="gra:       git remote add'" />
      <Detail title="grb:       git rebase'" />
      <Detail title="grba:      git rebase --abort'" />
      <Detail title="grbc:      git rebase --continue'" />
      <Detail title="grbd:      git rebase $(git_develop_branch)'" />
      <Detail title="grbi:      git rebase -i'" />
      <Detail title="grbm:      git rebase $(git_main_branch)'" />
      <Detail title="grbom:     git rebase origin/$(git_main_branch)'" />
      <Detail title="grbo:      git rebase --onto'" />
      <Detail title="grbs:      git rebase --skip'" />
      <Detail title="grev:      git revert'" />
      <Detail title="grh:       git reset'" />
      <Detail title="grhh:      git reset --hard'" />
      <Detail title="groh:      git reset origin/$(git_current_branch) --hard'" />
      <Detail title="grm:       git rm'" />
      <Detail title="grmc:      git rm --cached'" />
      <Detail title="grmv:      git remote rename'" />
      <Detail title="grrm:      git remote remove'" />
      <Detail title="grs:       git restore'" />
      <Detail title="grset:     git remote set-url'" />
      <Detail title="grss:      git restore --source'" />
      <Detail title="grst:      git restore --staged'" />
      <Detail title="gru:       git reset --'" />
      <Detail title="grup:      git remote update'" />
      <Detail title="grv:       git remote -v'" />
      <Detail title="gsb:       git status -sb'" />
      <Detail title="gsd:       git svn dcommit'" />
      <Detail title="gsh:       git show'" />
      <Detail title="gsi:       git submodule init'" />
      <Detail title="gsps:      git show --pretty=short --show-signature'" />
      <Detail title="gsr:       git svn rebase'" />
      <Detail title="gss:       git status -s'" />
      <Detail title="gst:       git status'" />
      <Detail title="gstaa:     git stash apply'" />
      <Detail title="gstc:      git stash clear'" />
      <Detail title="gstd:      git stash drop'" />
      <Detail title="gstl:      git stash list'" />
      <Detail title="gstp:      git stash pop'" />
      <Detail title="gsts:      git stash show --text'" />
      <Detail title="gstu:      gsta --include-untracked'" />
      <Detail title="gstall:    git stash --all'" />
      <Detail title="gsu:       git submodule update'" />
      <Detail title="gsw:       git switch'" />
      <Detail title="gswc:      git switch -c'" />
      <Detail title="gswm:      git switch $(git_main_branch)'" />
      <Detail title="gswd:      git switch $(git_develop_branch)'" />
      <Detail title="gts:       git tag -s'" />
      <Detail title="gtv:       git tag | sort -V'" />
      <Detail title="gunignore: git update-index --no-assume-unchanged'" />
      <Detail title="gup:       git pull --rebase'" />
      <Detail title="gupv:      git pull --rebase -v'" />
      <Detail title="gupa:      git pull --rebase --autostash'" />
      <Detail title="gupav:     git pull --rebase --autostash -v'" />
      <Detail title="gupom:     git pull --rebase origin $(git_main_branch)'" />
      <Detail title="gupomi:    git pull --rebase=interactive origin $(git_main_branch)'" />
      <Detail title="glum:      git pull upstream $(git_main_branch)'" />
      <Detail title="gwch:      git whatchanged -p --abbrev-commit --pretty=medium'" />
      <Detail title="gam:       git am'" />
      <Detail title="gamc:      git am --continue'" />
      <Detail title="gams:      git am --skip'" />
      <Detail title="gama:      git am --abort'" />
      <Detail title="gamscp:    git am --show-current-patch'" />
    </List>
  );
}
