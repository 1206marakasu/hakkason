#include<bits/stdc++.h>
using namespace std;
#define debug(x) cerr << "\033[33m(line:" << __LINE__ << ") " << #x << ": " << x << "\033[m" << endl;
class UnionFind{
    public:
    vector<int> par,siz;
    
    void init(int n){
        for(int i=0;i<n;i++){
            par.push_back(-1);
        }
        for(int i=0;i<n;i++){
            siz.push_back(1);
        }
    }

    int root(int x){
        while(true){
            if(par[x]==-1){
                break;
            }
            x=par[x];
        }
        return x;
    }

    void unite(int u, int v){
        int rootu=root(u);
        int rootv=root(v);
        if(rootu==rootv){
            return ;
        }
        if(siz[rootu]>=siz[rootv]){
            par[rootv]=rootu;
            siz[rootu]=siz[rootu]+siz[rootv];
        }
        if(siz[rootu]<siz[rootv]){
            par[rootu]=rootv;
            siz[rootv]+=siz[rootu];
        }
    }

    bool same(int u,int v){
        if(root(u)==root(v)){
            return true;
        }
        return false;
    }
};
int main(){
    int n,m,a,b;
    cin >> n >> m;
    vector<vector<int>> graph(n,vector<int>());
    UnionFind uf;
    uf.init(n);
    for(int i=0;i<m;i++){
        cin >> a >> b;
        graph[a-1].push_back(b-1);
        graph[b-1].push_back(a-1);
        uf.unite(a-1,b-1);
    }
    map<int,long long> mp;
    for(int i=0;i<n;i++){
        mp[uf.root(i)]=(long long)uf.siz[uf.root(i)];
    }
    long long ans=0;
    for(auto at:mp){
        ans+=(at.second-1)*(at.second)/2;
    }
    cout << ans-m << endl;
}
    
    