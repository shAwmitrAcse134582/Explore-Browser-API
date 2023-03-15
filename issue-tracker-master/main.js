document.getElementById('issueInputForm').addEventListener('submit', submitIssue);

function submitIssue(e) {
  const getInputValue = id => document.getElementById(id).value;
  const description = getInputValue('issueDescription');
  const severity = getInputValue('issueSeverity');
  const assignedTo = getInputValue('issueAssignedTo');
  const id = Math.floor(Math.random() * 100000000) + '';
  const status = 'open';

  const issue = { id, description, severity, assignedTo, status };
  let issues = [];
  if (localStorage.getItem('issues')) {
    issues = JSON.parse(localStorage.getItem('issues'));
  }
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));

  document.getElementById('issueInputForm').reset();
  fetchIssues();
  e.preventDefault();
}

const closeIssue = id => {

  const issues = JSON.parse(localStorage.getItem('issues'));
  console.log(issues);
  // const currentIssue = issues.find(issue => {
  //   // console.log(typeof (issue.id), typeof ((id)));
  //   // console.log(issue);
  //   // console.log(toString(issue.id) == toString(id));
  //   toString(issue.id) == toString(id)
  // });
  const currentIssue = issues.find(issue => toString(issue.id) == toString(id)
  );

  // if (currentIssue) {
  console.log(currentIssue.status);
  currentIssue.status = 'closed';
  console.log(currentIssue);

  // }
  localStorage.setItem('issues', JSON.stringify(issues));
  fetchIssues();
}

const deleteIssue = id => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  console.log(issues);
  const remainingIssues = issues.filter(issue => toString(issue.id) !== toString(id))
  // remainingIssues.status = 'Failed';
  localStorage.setItem('issues', JSON.stringify(remainingIssues));
  fetchIssues();
}

const fetchIssues = () => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const issuesList = document.getElementById('issuesList');
  issuesList.innerHTML = '';

  for (let i = 0; i < issues.length; i++) {
    const { id, description, severity, assignedTo, status } = issues[i];
    console.log(id);

    issuesList.innerHTML += `<div class="well">
                              <h6>Issue ID: ${id} </h6>
                              <p><span class="label label-info"> ${status} </span></p>
                              <h3> ${description} </h3>
                              <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
                              <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
                              <a href="#" onclick="closeIssue(${id})" class="btn btn-warning">Close</a>
                              <a href="#" onclick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
                              </div>`;
  }
}
