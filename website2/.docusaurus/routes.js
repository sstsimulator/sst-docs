import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/sst-website/__docusaurus/debug',
    component: ComponentCreator('/sst-website/__docusaurus/debug', '640'),
    exact: true
  },
  {
    path: '/sst-website/__docusaurus/debug/config',
    component: ComponentCreator('/sst-website/__docusaurus/debug/config', '640'),
    exact: true
  },
  {
    path: '/sst-website/__docusaurus/debug/content',
    component: ComponentCreator('/sst-website/__docusaurus/debug/content', 'fec'),
    exact: true
  },
  {
    path: '/sst-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/sst-website/__docusaurus/debug/globalData', 'd98'),
    exact: true
  },
  {
    path: '/sst-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/sst-website/__docusaurus/debug/metadata', '7ba'),
    exact: true
  },
  {
    path: '/sst-website/__docusaurus/debug/registry',
    component: ComponentCreator('/sst-website/__docusaurus/debug/registry', 'fc1'),
    exact: true
  },
  {
    path: '/sst-website/__docusaurus/debug/routes',
    component: ComponentCreator('/sst-website/__docusaurus/debug/routes', '92d'),
    exact: true
  },
  {
    path: '/sst-website/blog',
    component: ComponentCreator('/sst-website/blog', '098'),
    exact: true
  },
  {
    path: '/sst-website/blog/2017/05/10/v7.0.0-released',
    component: ComponentCreator('/sst-website/blog/2017/05/10/v7.0.0-released', '101'),
    exact: true
  },
  {
    path: '/sst-website/blog/2017/06/08/v7.1.0-released',
    component: ComponentCreator('/sst-website/blog/2017/06/08/v7.1.0-released', '12b'),
    exact: true
  },
  {
    path: '/sst-website/blog/2017/12/11/v7.2.0-released',
    component: ComponentCreator('/sst-website/blog/2017/12/11/v7.2.0-released', '1ab'),
    exact: true
  },
  {
    path: '/sst-website/blog/2018/05/31/v8.0.0-released',
    component: ComponentCreator('/sst-website/blog/2018/05/31/v8.0.0-released', 'ded'),
    exact: true
  },
  {
    path: '/sst-website/blog/2018/08/13/new-tutorial',
    component: ComponentCreator('/sst-website/blog/2018/08/13/new-tutorial', 'd8c'),
    exact: true
  },
  {
    path: '/sst-website/blog/archive',
    component: ComponentCreator('/sst-website/blog/archive', 'ed6'),
    exact: true
  },
  {
    path: '/sst-website/docs',
    component: ComponentCreator('/sst-website/docs', '082'),
    routes: [
      {
        path: '/sst-website/docs/contribute/get-involved',
        component: ComponentCreator('/sst-website/docs/contribute/get-involved', '3c5'),
        exact: true
      },
      {
        path: '/sst-website/docs/cpp/clock/clock_handler',
        component: ComponentCreator('/sst-website/docs/cpp/clock/clock_handler', 'a4f'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/component/configureLink',
        component: ComponentCreator('/sst-website/docs/cpp/component/configureLink', '9be'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/component/configureSelfLink',
        component: ComponentCreator('/sst-website/docs/cpp/component/configureSelfLink', '4a8'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/component/constructor',
        component: ComponentCreator('/sst-website/docs/cpp/component/constructor', '6ed'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/component/finish',
        component: ComponentCreator('/sst-website/docs/cpp/component/finish', '501'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/component/primaryComponentDoNotEndSim',
        component: ComponentCreator('/sst-website/docs/cpp/component/primaryComponentDoNotEndSim', 'a50'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/component/primaryComponentOKToEndSim',
        component: ComponentCreator('/sst-website/docs/cpp/component/primaryComponentOKToEndSim', '746'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/component/registerAsPrimaryComponent',
        component: ComponentCreator('/sst-website/docs/cpp/component/registerAsPrimaryComponent', 'ac2'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/component/registerClock',
        component: ComponentCreator('/sst-website/docs/cpp/component/registerClock', '59a'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/component/registerStatistic',
        component: ComponentCreator('/sst-website/docs/cpp/component/registerStatistic', '3a9'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/component/setup',
        component: ComponentCreator('/sst-website/docs/cpp/component/setup', '700'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/eli/sst_eli_document_params',
        component: ComponentCreator('/sst-website/docs/cpp/eli/sst_eli_document_params', 'a71'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/eli/sst_eli_document_ports',
        component: ComponentCreator('/sst-website/docs/cpp/eli/sst_eli_document_ports', '621'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/eli/sst_eli_document_statistics',
        component: ComponentCreator('/sst-website/docs/cpp/eli/sst_eli_document_statistics', '172'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/eli/sst_eli_doument_subcomponent_slots',
        component: ComponentCreator('/sst-website/docs/cpp/eli/sst_eli_doument_subcomponent_slots', 'c33'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/eli/sst_eli_register_component',
        component: ComponentCreator('/sst-website/docs/cpp/eli/sst_eli_register_component', '2a0'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/eli/sst_eli_register_subcomponent',
        component: ComponentCreator('/sst-website/docs/cpp/eli/sst_eli_register_subcomponent', 'aad'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/events/StringEvent',
        component: ComponentCreator('/sst-website/docs/cpp/events/StringEvent', 'cfb'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/helpUs',
        component: ComponentCreator('/sst-website/docs/cpp/helpUs', 'ebf'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/link/configureLink',
        component: ComponentCreator('/sst-website/docs/cpp/link/configureLink', 'da3'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/link/configureSelfLink',
        component: ComponentCreator('/sst-website/docs/cpp/link/configureSelfLink', '5fa'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/link/send',
        component: ComponentCreator('/sst-website/docs/cpp/link/send', '1cc'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/output/',
        component: ComponentCreator('/sst-website/docs/cpp/output/', '9c0'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/output/debug',
        component: ComponentCreator('/sst-website/docs/cpp/output/debug', '391'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/output/fatal',
        component: ComponentCreator('/sst-website/docs/cpp/output/fatal', '9a0'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/output/init',
        component: ComponentCreator('/sst-website/docs/cpp/output/init', '08a'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/output/verbose',
        component: ComponentCreator('/sst-website/docs/cpp/output/verbose', '164'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/rng/MarsagliaRNG',
        component: ComponentCreator('/sst-website/docs/cpp/rng/MarsagliaRNG', '47b'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/statistics/addData',
        component: ComponentCreator('/sst-website/docs/cpp/statistics/addData', 'ff0'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/cpp/statistics/registerStatistic',
        component: ComponentCreator('/sst-website/docs/cpp/statistics/registerStatistic', 'bc9'),
        exact: true,
        sidebar: "C++"
      },
      {
        path: '/sst-website/docs/guides/external/projectDriver',
        component: ComponentCreator('/sst-website/docs/guides/external/projectDriver', '00c'),
        exact: true,
        sidebar: "Guides"
      },
      {
        path: '/sst-website/docs/guides/files/basics_header_files',
        component: ComponentCreator('/sst-website/docs/guides/files/basics_header_files', '238'),
        exact: true,
        sidebar: "Guides"
      },
      {
        path: '/sst-website/docs/guides/files/basics_makefile',
        component: ComponentCreator('/sst-website/docs/guides/files/basics_makefile', '18c'),
        exact: true,
        sidebar: "Guides"
      },
      {
        path: '/sst-website/docs/guides/helpUs',
        component: ComponentCreator('/sst-website/docs/guides/helpUs', '3ff'),
        exact: true,
        sidebar: "Guides"
      },
      {
        path: '/sst-website/docs/projectDriver/component/',
        component: ComponentCreator('/sst-website/docs/projectDriver/component/', 'e7d'),
        exact: true,
        sidebar: "ProjectDriver"
      },
      {
        path: '/sst-website/docs/projectDriver/component/addParams',
        component: ComponentCreator('/sst-website/docs/projectDriver/component/addParams', '6bf'),
        exact: true,
        sidebar: "ProjectDriver"
      },
      {
        path: '/sst-website/docs/projectDriver/component/enableAllStatistics',
        component: ComponentCreator('/sst-website/docs/projectDriver/component/enableAllStatistics', '864'),
        exact: true,
        sidebar: "ProjectDriver"
      },
      {
        path: '/sst-website/docs/projectDriver/component/setSubComponent',
        component: ComponentCreator('/sst-website/docs/projectDriver/component/setSubComponent', '5cc'),
        exact: true,
        sidebar: "ProjectDriver"
      },
      {
        path: '/sst-website/docs/projectDriver/helpUs',
        component: ComponentCreator('/sst-website/docs/projectDriver/helpUs', '70d'),
        exact: true,
        sidebar: "ProjectDriver"
      },
      {
        path: '/sst-website/docs/projectDriver/link/',
        component: ComponentCreator('/sst-website/docs/projectDriver/link/', '630'),
        exact: true,
        sidebar: "ProjectDriver"
      },
      {
        path: '/sst-website/docs/projectDriver/link/connect',
        component: ComponentCreator('/sst-website/docs/projectDriver/link/connect', 'cb9'),
        exact: true,
        sidebar: "ProjectDriver"
      },
      {
        path: '/sst-website/docs/projectDriver/sst/component',
        component: ComponentCreator('/sst-website/docs/projectDriver/sst/component', '05c'),
        exact: true,
        sidebar: "ProjectDriver"
      },
      {
        path: '/sst-website/docs/projectDriver/sst/enableAllStatisticsForAllComponents',
        component: ComponentCreator('/sst-website/docs/projectDriver/sst/enableAllStatisticsForAllComponents', '526'),
        exact: true,
        sidebar: "ProjectDriver"
      },
      {
        path: '/sst-website/docs/projectDriver/sst/link',
        component: ComponentCreator('/sst-website/docs/projectDriver/sst/link', '4ee'),
        exact: true,
        sidebar: "ProjectDriver"
      },
      {
        path: '/sst-website/docs/projectDriver/sst/setStatisticLoadLevel',
        component: ComponentCreator('/sst-website/docs/projectDriver/sst/setStatisticLoadLevel', 'b16'),
        exact: true,
        sidebar: "ProjectDriver"
      },
      {
        path: '/sst-website/docs/tools/applications/gui',
        component: ComponentCreator('/sst-website/docs/tools/applications/gui', '9d0'),
        exact: true,
        sidebar: "Tools"
      },
      {
        path: '/sst-website/docs/tools/commandLine/sst-config',
        component: ComponentCreator('/sst-website/docs/tools/commandLine/sst-config', '1ff'),
        exact: true,
        sidebar: "Tools"
      },
      {
        path: '/sst-website/docs/tools/commandLine/sst-info',
        component: ComponentCreator('/sst-website/docs/tools/commandLine/sst-info', '173'),
        exact: true,
        sidebar: "Tools"
      },
      {
        path: '/sst-website/docs/tools/commandLine/sst-register',
        component: ComponentCreator('/sst-website/docs/tools/commandLine/sst-register', 'aa9'),
        exact: true,
        sidebar: "Tools"
      },
      {
        path: '/sst-website/docs/tools/helpUs',
        component: ComponentCreator('/sst-website/docs/tools/helpUs', '90a'),
        exact: true,
        sidebar: "Tools"
      }
    ]
  },
  {
    path: '/sst-website/',
    component: ComponentCreator('/sst-website/', 'bf8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
