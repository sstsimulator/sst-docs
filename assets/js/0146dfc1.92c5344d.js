"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5938],{37929:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=n(74848),i=n(28453);const t={title:"Shared::SharedArray"},a=void 0,l={id:"core/sharedobj/sharedArray",title:"Shared::SharedArray",description:"SharedArray constructs an array of shared elements. The array is replicated globally across SST's ranks and threads. The array can be written during SST's construction and/or init stages and becomes read-only either when all the components that have initialized the array also publish it or when the setup stage begins, whichever is first.",source:"@site/../docs/core/sharedobj/sharedArray.md",sourceDirName:"core/sharedobj",slug:"/core/sharedobj/sharedArray",permalink:"/sst-docs/docs/core/sharedobj/sharedArray",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/sharedobj/sharedArray.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:1729787241e3,frontMatter:{title:"Shared::SharedArray"},sidebar:"core",previous:{title:"Shared Objects",permalink:"/sst-docs/docs/core/sharedobj/overview"},next:{title:"Shared::SharedMap",permalink:"/sst-docs/docs/core/sharedobj/sharedMap"}},d={},o=[{value:"Constructor",id:"constructor",level:2},{value:"initialize",id:"initialize",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Error conditions",id:"error-conditions",level:4},{value:"begin",id:"begin",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"empty",id:"empty",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"end",id:"end",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"isFullyPublished",id:"isfullypublished",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"mutex_read",id:"mutex_read",level:2},{value:"Parameters",id:"parameters-5",level:4},{value:"operator[]",id:"operator",level:2},{value:"Parameters",id:"parameters-6",level:4},{value:"publish",id:"publish",level:2},{value:"Parameters",id:"parameters-7",level:4},{value:"rbegin",id:"rbegin",level:2},{value:"Parameters",id:"parameters-8",level:4},{value:"rend",id:"rend",level:2},{value:"Parameters",id:"parameters-9",level:4},{value:"size",id:"size",level:2},{value:"Parameters",id:"parameters-10",level:4},{value:"write",id:"write",level:2},{value:"Parameters",id:"parameters-11",level:4},{value:"Header",id:"header",level:2}];function h(e){const r={code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"SharedArray constructs an array of shared elements. The array is replicated globally across SST's ranks and threads. The array can be written during SST's construction and/or init stages and becomes read-only either when all the components that have initialized the array also publish it or when the setup stage begins, whichever is first."}),"\n",(0,s.jsx)(r.p,{children:"Before the array becomes read-only, components should use caution with functions that are not thread-safe as the array may be modified by other threads concurrently."}),"\n",(0,s.jsx)(r.h2,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"Shared::SharedArray<T>();\nShared::SharedArray<bool>(); // Special case that uses std::vector<bool> for storage\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The template type ",(0,s.jsx)(r.code,{children:"T"})," must be a non-pointer type and must be serializable."]}),"\n",(0,s.jsx)(r.h2,{id:"initialize",children:"initialize"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"int initialize(const std::string& obj_name, size_t length = 0, T init_value = T(), verify_type v_type = INIT_VERIFY);\n"})}),"\n",(0,s.jsx)(r.p,{children:"Initializes the SharedArray and returns the number of components (on the current rank) that have already initialized the array."}),"\n",(0,s.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"obj_name"})," (std::string) The name of the object to initialize."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"length"})," (size_t) The size of the array. The array will be the maximum size initialized by any component."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"init_value"})," (T) A default value to give array elements. If not provided, the default constructor for type ",(0,s.jsx)(r.code,{children:"T"})," is used."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"v_type"})," (verify_type) A conflict resolution policy: INIT_VERIFY (default), FE_VERIFY, or NO_VERIFY."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," (int) The number of components on the current rank that have already initialized the array."]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"error-conditions",children:"Error conditions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Components may only call initialize once on each object."}),"\n",(0,s.jsx)(r.li,{children:"Components may not initialize the same object with different verify_type arguments."}),"\n",(0,s.jsx)(r.li,{children:"Initialize must be called prior to SST's setup stage."}),"\n",(0,s.jsx)(r.li,{children:"The size of the array will be the maximum of the 'length' parameters provided in the initialize calls. Writing/reading beyond this length is not allowed."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"begin",children:"begin"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"const_iterator begin();\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns a const iterator to the beginning of the array. If called prior to the SharedArray becoming read-only, the returned iterator could become invalid if the array is resized."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," (const_iterator) A const iterator to the beginning of the array."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"empty",children:"empty"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"bool empty();\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns whether array is empty. Thread-safe."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," (bool) True if array is empty (size == 0), false otherwise."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"end",children:"end"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"const_iterator end();\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns a const iterator to the end of the array. If called prior to the SharedArray becoming read-only, the returned iterator could become invalid if the array is resized."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," (const_iterator) A const iterator to the end of the array."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"isfullypublished",children:"isFullyPublished"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"bool isFullyPublished();\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Returns whether every component that has initialized the array has also published it. Note that it is possible for ",(0,s.jsx)(r.code,{children:"isFullyPublished()"})," to return ",(0,s.jsx)(r.code,{children:"true"})," in one phase of init and return ",(0,s.jsx)(r.code,{children:"false"})," in a subsequent phase if a component initializes the array between the calls to ",(0,s.jsx)(r.code,{children:"isFullyPublished()"})," (e.g., during the init stage)."]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," (bool) True if every component that has initialized the SharedArray has also published it, false otherwise."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"mutex_read",children:"mutex_read"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"const T& mutex_read(int index);\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns the value at the specified index. This is thread-safe and can be used prior to the array becoming read-only."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"index"})," (int) Index to read from."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," (const T) A const reference to the value at the specified index."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"operator",children:"operator[]"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"const T& operator[](int index);\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Returns the value at the specified index. This is not thread-safe. Prior to the array becoming read-only, use ",(0,s.jsx)(r.code,{children:"mutex_read()"})," instead."]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"index"})," (int) Index to read from."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," (const T) A const reference to the value at the specified index."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"publish",children:"publish"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"void publish();\n"})}),"\n",(0,s.jsx)(r.p,{children:"Changes the state of the SharedArray to read-only for the calling component. A component may not write the array after publishing it."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," None."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"rbegin",children:"rbegin"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"const_reverse_iterator rbegin();\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns a const reverse_iterator to the beginning of the array. If called prior to the SharedArray becoming read-only, the returned iterator could become invalid if the array is resized."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," (const_reverse_iterator) A const reverse_iterator to the beginning of the array."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"rend",children:"rend"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"const_reverse_iterator rend();\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns a const reverse_iterator to the end of the array. If called prior to the SharedArray becoming read-only, the returned iterator could become invalid if the array is resized."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," (const_reverse_iterator) A const reverse_iterator to the end of array."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"size",children:"size"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"size_t size();\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns the size of the array. Thread safe."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," (size_t) Size of the array."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"write",children:"write"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"void write(int index, const T& value);\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Write ",(0,s.jsx)(r.code,{children:"value"})," to the specified index. This function can be used after calling initialize and prior to calling publish. It is thread-safe."]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"index"})," (int) Index to write to."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"value"})," (const T) Value to write."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"returns"})," None"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"header",children:"Header"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-cpp",children:"#include <sst/core/shared/sharedArray.h\n"})})]})}function c(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>l});var s=n(96540);const i={},t=s.createContext(i);function a(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);