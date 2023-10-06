// describe("Servers test (with setup and tear-down)", function() {
//   beforeEach(function () {
//     serverNameInput.value = 'Alice';
//   });

//   it('should add a new server to allServers on submitServerInfo()', function () {
//     submitServerInfo();

//     expect(Object.keys(allServers).length).toEqual(1);
//     expect(allServers['server' + serverId].serverName).toEqual('Alice');
//   });

//   it('should not add a new server on submitServerInfo() with empty input', function () {
//     serverNameInput.value = '';
//     submitServerInfo();

//     expect(Object.keys(allServers).length).toEqual(0);
//   });

// describe("Server Functions Test", function() {
//   let serverNameInput, serverForm, serverTbody;
//   let allServers = {};
//   let serverId = 0;

//   beforeEach(function() {
//     serverNameInput = document.createElement('input');
//     serverNameInput.id = 'serverName';
//     serverForm = document.createElement('form');
//     serverForm.id = 'serverForm';
//     serverTbody = document.createElement('tbody');
//     serverTbody.id = 'serverTable';

//     document.body.appendChild(serverNameInput);
//     document.body.appendChild(serverForm);
//     document.body.appendChild(serverTbody);

//     serverForm.addEventListener('submit', submitServerInfo);
//   });

//   afterEach(function() {
//     serverForm.removeEventListener('submit', submitServerInfo);

//     if (serverNameInput && serverNameInput.parentNode) {
//       serverNameInput.parentNode.removeChild(serverNameInput);
//     }
//     if (serverForm && serverForm.parentNode) {
//       serverForm.parentNode.removeChild(serverForm);
//     }
//     if (serverTbody && serverTbody.parentNode) {
//       serverTbody.parentNode.removeChild(serverTbody);
//     }
    
//     allServers = {};
//     serverId = 0;
//   });

// });


//   it("should add a new server to allServers and update the table", function() {
//     serverNameInput.value = 'Alice';

//     serverForm.dispatchEvent(new Event('submit'));

//     expect(Object.keys(allServers).length).toEqual(2);
//     expect(allServers['server1'].serverName).toEqual('Alice');

//     expect(serverTbody.innerHTML).toContain('Alice');
//   });

//   it("should update the server table with the correct average tip", function() {
//     allServers = {
//       server1: { serverName: 'Alice' },
//       server2: { serverName: 'Bob' }
//     };

//     updateServerTable();

//     expect(serverTbody.innerHTML).toContain('Alice');
//     expect(serverTbody.innerHTML).toContain('Bob');
//     expect(serverTbody.innerHTML).toContain('$0.00'); 
//   });
describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00');
    expect(curTdList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});