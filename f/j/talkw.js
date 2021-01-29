var gitalk = new Gitalk({
    clientID: 'bd05bd85bb78c0ddee1f',
    clientSecret: '7aa326a93b82d40c7489249103e37193144cf1b5',
    repo: 'hsz75.github.io',
    owner: 'hsz75',
    admin: ['hsz75'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false,  // Facebook-like distraction free mode
    createIssueManually: false,
    enableHotKey: true,
    number: 1,
    labels: ['bug'],
    title: 'hsz75.github.io',
    body: 'talkwith'
  })
  
  gitalk.render('gitalk-container')