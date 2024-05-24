"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5506],{40699:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>A,default:()=>i,frontMatter:()=>a,metadata:()=>c,toc:()=>r});var s=e(74848),o=e(28453);const a={title:"Component and SubComponent Classes"},A=void 0,c={id:"config/component/classes",title:"Component and SubComponent Classes",description:"\x3c!---",source:"@site/../docs/config/component/classes.md",sourceDirName:"config/component",slug:"/config/component/classes",permalink:"/sst-docs/docs/config/component/classes",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/config/component/classes.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1702928554e3,frontMatter:{title:"Component and SubComponent Classes"},sidebar:"config",previous:{title:"findComponentByName",permalink:"/sst-docs/docs/config/general/findComponentByName"},next:{title:"Component",permalink:"/sst-docs/docs/config/component/"}},l={},r=[];function p(t){const n={a:"a",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Component and SubComponent Python classes represent the Component and SubComponent C++ classes that are used to implement the simulation models used in SST. They are similar, and have similar APIs, but SubComponents can only exist inside of Components. Subsequently, Components are instanced directly, but SubComponents are only instanced through a Component or another SubComponent."}),"\n",(0,s.jsx)(n.p,{children:"The figures below show the main structures of the Component/SubComponent objects. The right image illustrates the arbitrary nesting capability of SubComponents."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Main structures of the Component and SubComponent objects",src:e(48744).A+"",width:"164",height:"197"})," ",(0,s.jsx)(n.img,{alt:"Component with SubComponents loaded, showing that SubComponents can be arbitrarily nested",src:e(96389).A+"",width:"164",height:"197"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../component",children:"Create a Component"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"setSubComponent",children:"Create a SubComponent"})}),"\n"]})]})}function i(t={}){const{wrapper:n}={...(0,o.R)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(p,{...t})}):p(t)}},96389:(t,n,e)=>{e.d(n,{A:()=>s});const s=e.p+"assets/images/component-structure-with-subcomponent-d7fc39636bec4fbe73b41781f72f3aef.png"},48744:(t,n,e)=>{e.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAADFCAYAAADaHVm+AAABOGlDQ1BrQ0dDb2xvclNwYWNlQWRvYmVSR0IxOTk4AAAokWNgYFJILCjIYRJgYMjNKykKcndSiIiMUmB/xsDKIMDAzSDCYJiYXFzgGBDgwwAEMBoVfLvGwAiiL+uCzJpivO1cjMWGdoHpqRe3pXw2xVSPArhSUouTgfQfIM5OLigqYWBgzACylctLCkDsHiBbJCkbzF4AYhcBHQhkbwGx0yHsE2A1EPYdsJqQIGcg+wOQzZcEZjOB7OJLh7AFQGyovSAg6JiSn5SqAPK9hqGlpYUmATeTDEpSK0pAtHN+QWVRZnpGiYIjMKRSFTzzkvV0FIwMjIwYGEDhDlH9ORAcnoxiZxBiCIAQmyPBwOC/lIGB5Q9CzKSXgWGBDgMD/1SEmJohA4OAPgPDvjnJpUVlUGMYmYwZGAjxAbNxUpRQWbTHAAAAOGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAACoAIABAAAAAEAAACkoAMABAAAAAEAAADFAAAAAKb+5EEAACTFSURBVHgB7d0HuCtV1TfwjRQVBFQQ6b2D9I5U6R2kCgKiVOm9CIj03gUBAZHeQXrvvTfpIF2pIgLiC7z3t793329u7iSZ5CQ5ycms58lJzsyePXvW/GftVfeM8ve///3rt99+O5RUcqAIB374wx+GCSecsEjTptqMMuyor6eddtow6qijNtVBeVB/ceC5554L//3vf8Noo43WlgsfZVjHX99xxx1h9NFHb8sJyk6HFgcWXHDB8O9//zuMMcYYbbmwb7Sl17LTkgNNcqAEZJOMKw9rDwdKQLaHr2WvTXKgBGSTjCsPaw8HSkC2h69lr01yoARkk4wrD2sPB9rjTGpgrP/zP/8TXnnllfDpp5+GSSaZJIw//vgNHF02HWocGDRAfvzxx+HAAw8Md955Z3S0JsbONddcYYcddggzzjhj2lR+V3AAz77zne+EOeecs2JP7/87KID84IMPwsYbbxyELH/6058Gztavvvoq3H333eGaa64JW2+9dTjjjDPCZJNN1vscbsMVHH744WGmmWYqAdkq3p555pkRjLvvvnsEZOp3iSWWCOONN144/fTTw/nnnx922WWXtKv87hMOdFxCCjtdcsklYZppphkBjInfv/jFL8Lf/va3EWLr//rXv8IxxxwTHnroofD++++HGWaYIay33nphqaWWiod98sknYYsttgg///nPwwMPPBAl7ddffx1WWmmloL9DDjkk3HfffeHLL78MCy20UPjNb34Tvv3tb4djjz02vPbaa2HeeecNl112WXjjjTeCuP5aa60Vj01j8u0Bueqqq8LLL78cdd1FFlkknjOF0A477LAo5UmuCy64ILz00kthqqmmCjvttFPsP/V14YUXxnO9/vrrUcqtscYaYfnll4+7b7nllvgw7rHHHuH3v/99ePzxx+PUrM2mm24annjiiUA6vvvuuwFPNthgg6jezD333Kn7nv/uuJUNAF988cVwMFVy8Fvf+lYE0I477hh3/ec//wkbbbRRuPLKK6Neufbaa8cb4qZdeumlsY3pXtB/3333jTdtxRVXjBkpZ511VlhnnXUiSJdZZpl4/A033BBsR8Yijn/kkUdG8ADiP//5z7DffvvFhyY2Gvbn6KOPjm2c52c/+1n4wQ9+EP785z+H7bffPjUJr776arjuuusiYGadddZgDAC+2267RYNNQyADKIabBwqo9tlnn3D99dfHfj766KN4Hb/+9a/j/2uuuWb45je/GU499dQ4Tg/RFFNMERMbbPcbv4YSdVxCAgGaaKKJCvHx4osvDqTJNttsEzbccMN4DKkHGG7wCiusMLwfaVF/+tOfwphjjhkl6XLLLRcBBiiMAFkqSy+9dHj++eeHH+PHdtttF6WN35tsskn8fcopp4SVV145gp/Em2222cLJJ588PAnlgAMOCFdccUW46667wo9//GOHxqQDknzhhReO/7tG/bzwwgthggkmiCBeddVVo4TWYLPNNou6tH6XXXbZeIw/VBcPF1pttdWixH744YeDh5QhuMoqq0Tp6vdQo45LSFMpMn0WIdM0yQCAicYee+x4k0izF198MW0OpCAwIroo6WGKBkYkowkwADMRSUMyJhpnnHGCKZLhZXp+7LHH4lg9DNmMKMBFDz74YDo0njOB0cZkBZOE+uHimnzyyaNKwYCjXlARSFLnSgRwiaaccsow7rjjxgcrbRvK3x2XkHyN6K233qrK19NOOy0aPXvvvXcYlkAcJIVW5t+5samf9Lty+vrGN74Rvvvd745wnlFGkQL6/wlAgTJLaYzO7YPSttRu4oknjmN655130qYIyOH/DPuRzuUhfPPN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6nrNhvT+woDEKEZNuQh++/BAQnrw+5kKA3L00UePhs2jjz7az/xq67Xfd999YYYZZmjrObq988KAdCEzzTRTeOCBB7r9mnpyfN78+vTTT0ce9+QFtGjQDQFy5plnDvfee2+LTl12k+XAE088Ef2P/bjAVJYPDQFylllmKSVklnst/H3//fcH/O13agiQFO533nmnXMmiDai5++67S0AO42tDgFTOMPvss4fbbrutDbekv7u89dZbw1xzzdXfTBh29Q0BErfmmGOOgHkltY4DL7/8cvj666/7OoaduNkwIOebb75w3XXXpePL7xZw4Prrrw/zzjtvC3rq/S4aBuSMM84Y3n///fDGG2/0/tV3yRVce+21Yf755++S0QzuMBoGpDczLLzwwuEvf/nL4I58iJxdDQ2dfKGFFhoiVzSwy2gYkE63yCKLhAsuuGBgZy6Pjhyg/gg49ONquXkQaAqQCy64YBBCNHWXNDAOXHTRRWHxxRcfWCdD6OimAOn9KaTk2WefPYRY0flL8T7DK664Iiy99NKdP3mXnrEpQLqWFVZYIZxxxhldelm9MayLL744Wtf9utJZ3l1qGpDcPx9++GEZSszjasFtxx9/fFh11VULtu6PZk0DEnvWWWedcNBBB/UHp1p8lbfffnvUwUvrekTGDgiQq6yySrjrrrvCM888M2Kv5X91ObDvvvuGDTfcsK/LFfKYNCBAejHnRhttFHbccce8vsttVTjAEW6tJHp4SSNyYECA1NVaa60VxGJLv+SIjK32H8t6iy22CDvssEMYddRRqzXr2+0DBqRFBPbee++w+eabh5tuuqlvGVn0wr2IStx6gQUWKHpIX7UbMCBxS6ThyCOPjP40dSEljcwBJQpUG1n3u++++8gNyi2RA6O1ig/yJA8++OCw0korhWWWWSbMOeecMaWqVf33aj+mZYvYn3POOUFiyimnnNKrl9KRcY8ybMr9+o477giqCltBfJM333xzzCyX41dSiC9iF24lHSWn9DK5DnrwGGOM0ZbLaJmETKOz8uuaa66Z/i2/Sw40xIGW6JANnbFsXHKgBgdKQNZgTrmr8xwoAdl5npdnrMGBujqkxe6/+OKLqsp4Mlwo63m/nVu14ldffTXSMCq35/WRtuUZA6xX7/JmycqY8daxKYetY1k6nEdidc9sqAlI1pRIjCXi5EDmUQJaFlzZ345JoKo8vnJ79rj0O/vteKBP4Ky2Gpv6cRYtV9Q888zT9HqLn3/+efjyyy8rhz1k/xfkqHafO3XRNQHJmctq7pWVc6+++uroB5X0ykF/yy23hNNOOy26oFZfffUw99xzB2lzRd4Bo4jNMWOOOWan7sWgn+fTTz8NN9xwQyH+tGuwNQHZrpO2q1/SEHmFCdCtscYaUcJbN8eaRPvvv39QVIXWXnvtsNNOO0V1Im6o+OMd4VLDrCjRLzTttNNGFajIA9sungwpQI433ngxaeHcc88dQW81zctMUipACpCcF154Yfw8+OCD7eJt2W8THGgpIL3F1KoWdBE3v5kXSFpjW7Sn3jqJDC2FZtl6Zuc96qijCrHh448/DuOOO26htmWjznGgZW6ftPqC6fHSSy+NgLLeIVp55ZWDF0pWI6Wge+65Z9wN0LXivakv7/DebrvtqnVZdztjqd+XvqvLpEFo0DIJef7554edd9457LrrrvEyJFko8bTE3EsvvTTSS5dY50CBSKv0Pm5lET6Jsu1sS31x71RmFlW2TX2U373DgZZJSHoafYwxgEydCpi23377uDa536b0E044IbqRZp111lhK65i99torXHXVVTGvknQlLU3diy66aMwakiVz5ZVXjtCXlXyXWGKJeC7H6m/66acPiy++eHzrWNxR/uk5DrQMkIcffngYf/zxY+IpP+DRRx8d/z/mmGPCVFNNFeuPvRDooYceikuHeMWIhQZYvQceeGB017CCP/nkk7iddUtyckPIRjflZ/vyUnlSlZGy8cYbR2nsfYwks2yjknqTAy0DJIklSdebGhR+mY7XXXfdEbhCinqbwyabbBLdMQBXzfG8/PLLRwm74oorhvXWW294FGiEDof9I5LETSFJGFEbNthgg/i7/NN7HGgZIA899NDohMYC70VcbLHFovRKLKHfkWBqkU2xdE7p/ECK7M8S40Y/JKoVMpJuWtnWq3wZOOk9jHyLp556arar8ncPcaBlgDz55JMjIOlxIiJ77LFH1BfxQvY4J7PIj6nWfu4aUzyAOkaUJWs1/+hHPwrHHXdcbCu/cptttolsTX150TkaZ5xxor6qf64iJbnrr79+3Ff+6T0OtMzKFjvm8mHUeLkS6ZasaOn7ibShO3Jik4rixWONNVbcltqoV0bcRtoK36UQXrav5557LrajAijHpU+Wq4hF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"},28453:(t,n,e)=>{e.d(n,{R:()=>A,x:()=>c});var s=e(96540);const o={},a=s.createContext(o);function A(t){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:A(t.components),s.createElement(a.Provider,{value:n},t.children)}}}]);