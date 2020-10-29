export default [
  {
    id: 1,
    title: '이슈1',
    contents: '이슈이슈',
    writer: 'test',
    milestoneTitle: '마일스톤1',
    isClosed: false,
    closedAt: null,
    createdAt: '2020-10-28',
    updatedAt: null,
    assigneeList: [
      {
        id: 1,
        name: 'test',
      },
    ],
    labelList: [
      {
        id: 1,
        name: 'front',
        color: '#ff00ff',
      },
      {
        id: 2,
        name: 'back',
        color: '#5100ff',
      },
    ],
    commentLength: 2,
  },
  {
    id: 2,
    title: '이슈2',
    contents: '이슈이슈이슈이슈',
    writer: 'help',
    milestoneTitle: '마일스톤2',
    isClosed: true,
    closedAt: '2020-10-20',
    createdAt: '2020-10-10',
    updatedAt: '2020-10-20',
    assigneeList: [
      {
        id: 1,
        name: 'test',
      },
      {
        id: 2,
        name: 'help',
      },
    ],
    labelList: [
      {
        id: 2,
        name: 'back',
        color: '#5100ff',
      },
    ],
    commentLength: 5,
  },
];
