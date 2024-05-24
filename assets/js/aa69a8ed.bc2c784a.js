"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9866],{38482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(74848),s=t(28453);const r={title:"find"},o=void 0,i={id:"core/params/find",title:"find",description:"Find a key in the Params object and return the corresponding value as template type T. If desired, the function can also take a default value to be returned if the key is not found, and a boolean variable to set indicating whether the key was found.",source:"@site/../docs/core/params/find.md",sourceDirName:"core/params",slug:"/core/params/find",permalink:"/sst-docs/docs/core/params/find",draft:!1,unlisted:!1,editUrl:"https://github.com/sstsimulator/sst-docs/edit/master/docs/../docs/core/params/find.md",tags:[],version:"current",lastUpdatedBy:"grvosku",lastUpdatedAt:168452215e4,frontMatter:{title:"find"},sidebar:"core",previous:{title:"operator=",permalink:"/sst-docs/docs/core/params/operatoreq"},next:{title:"find_array",permalink:"/sst-docs/docs/core/params/find_array"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Header",id:"header",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'template<class T> // All find functions below are templated on a single parameter, T\n\n/* Find a given key */\nT find(const std::string& key) const;\n\n/* Find a given key, return a default value if not found */\nT find(const std::string& key, T default_value) const;\nT find(const std::string& key, const std::string& default_value) const;\n\n/* Find a given key, also indicate if found */\nT find(const std::string& key, bool& found) const;\n\n/* Find a given key, return a default value if not found, also indicate if found */\nT find(const std::string& key, T default_value, bool& found) const;\nT find(const std::string& key, const std::string& default_value, bool& found) const;\n\n/* Special case for find<bool> to enable conversion of "T"/"F" to bool */\nT find(const std::string& key, const char* default_value) const;\nT find(const std::string& key, const char* default_value, bool& found) const;\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Find a key in the Params object and return the corresponding value as template type ",(0,a.jsx)(n.code,{children:"T"}),". If desired, the function can also take a default value to be returned if the key is not found, and a boolean variable to set indicating whether the key was found."]}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"key"})," (std::string) The key to find"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"default_value"})," (T, std::string, char*) A value to return if the key is not found in the Params object"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"found"})," (bool) A variable that will be set to True if the key is found or False otherwise"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"returns"})," (T) The value matching the key, or the default_value if provided and the key is not found"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",metastring:'title="Excerpt from sst-elements/src/sst/elements/simpleElementExample/basicParams.cc"',children:'/* \n * This Component has several parameters which are uncreatively named by their type \n * (e.g., "bool_param" is a bool)\n */\nbasicParams::basicParams(ComponentId_t id, Params& params) : Component(id)\n{\n    out = new Output("", 1, 0, Output::STDOUT);\n\n    //highlight-start\n    bool param0 = params.find<bool>("bool_param", false);\n    uint32_t param1 = params.find<uint32_t>("uint32_param", 400);\n    double param2 = params.find<double>("double_param", 12.5);\n    std:;string param3 = params.find>std::string>("string_param", "hello");\n    //highlight-end\n\n    out->output("Found basic parameters: bool_param = %d, uint32_param = %" PRIu32 ", double_param = %f, string_param = %s\\n",\n            param0, param1, param2, param3.c_str());\n\n    // Discover whether a parameter was passed in from the input file or not\n    bool found;\n    int param4 = params.find<int>("int_param", 0, found);\n\n    if (!found) {\n        out->fatal(CALL_INFO, -1, "Uh oh, in \'%s\', int_param is a required parameter, but it wasn\'t found in the parameter set.\\n",\n                getName().c_str());\n    } else {\n        out->output("Found the required parameter \'int_param\' and got %d\\n", param4);\n    }\n\n    /* More complex types that have constructors which take strings\n     * - UnitAlgebra is a class provided by SST\n     * - ExampleType is a made up class for this example, see basicParams.h\n     */ \n     //highlight-start\n    UnitAlgebra param5 = params.find<UnitAlgebra>("ua_param", "2TB/s");\n    ExampleType param6 = params.find<ExampleType>("example_param", "key:5");\n    //highlight-end\n\n    out->output("Read ua_param = %s\\n", param5.toStringBestSI().c_str());\n    out->output("Read example_param. key = %s, value = %d\\n", param6.key.c_str(), param6.value);\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,a.jsx)(n.p,{children:"The Params header file is included with any SST object that supports Params."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"#include <sst/core/component.h> // or\n#include <sst/core/subcomponent.h> // or\n#include <sst/core/componentExtension.h> // or\n#include <sst/core/params.h> // if not included in base class\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);