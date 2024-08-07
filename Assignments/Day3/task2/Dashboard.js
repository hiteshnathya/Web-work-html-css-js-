// policies data
let policies = [
    {
        id: 1,
        name: "Life Insurance Policy",
        type: "Life Insurance",
        description: "This is a life insurance policy.",
        attributes: [
            { name: "Policy Term", value: "10 years" },
            { name: "Sum Assured", value: "$100,000" },
            { name: "Premium", value: "$500/month" }
        ]
    },
    {
        id: 2,
        name: "Health Insurance Policy",
        type: "Health Insurance",
        description: "This is a health insurance policy.",
        attributes: [
            { name: "Policy Term", value: "5 years" },
            { name: "Sum Assured", value: "$50,000" },
            { name: "Premium", value: "$200/month" }
        ]
    },
    {
        id: 3,
        name: "Travel Insurance Policy",
        type: "Travel Insurance",
        description: "This is a travel insurance policy.",
        attributes: [
            { name: "Policy Term", value: "1 year" },
            { name: "Sum Assured", value: "$20,000" },
            { name: "Premium", value: "$100/month" }
        ]
    }
];

// function to render policies table
function renderPoliciesTable() {
    let tableBody = document.getElementById("policies-table-body");
    tableBody.innerHTML = "";
    policies.forEach(policy => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${policy.id}</td>
            <td>${policy.name}</td>
            <td>${policy.type}</td>
            <td>
                <button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#policy-details-modal" data-policy-id="${policy.id}">View Details</button>
                <button class="btn btn-sm btn-danger" data-policy-id="${policy.id}">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// function to render policy details modal
function renderPolicyDetailsModal(policyId) {
    let policy = policies.find(policy => policy.id == policyId);
    let modalBody = document.getElementById("policy-details-modal-body");
    modalBody.innerHTML = `
        <h2>${policy.name}</h2>
        <p>${policy.description}</p>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Policy Attribute</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody id="policy-attributes-modal">
                ${policy.attributes.map(attribute => `
                    <tr>
                        <td>${attribute.name}</td>
                        <td>${attribute.value}</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

// event listener for view details button
document.addEventListener("click", event => {
    if (event.target.classList.contains("btn-primary") && event.target.dataset.toggle == "modal") {
        let policyId = event.target.dataset.policyId;
        renderPolicyDetailsModal(policyId);
    }
});

// event listener for delete button
document.addEventListener("click", event => {
    if (event.target.classList.contains("btn-danger")) {
        let policyId = event.target.dataset.policyId;
        policies = policies.filter(policy => policy.id != policyId);
        renderPoliciesTable();
    }
});

// event listener for create policy form submission
document.getElementById("policy-create-form").addEventListener("submit", event => {
    event.preventDefault();
    let policyName = document.getElementById("policy-name").value;
    let policyType = document.getElementById("policy-type").value;
    let policy = {
        id: policies.length + 1,
        name: policyName,
        type: policyType,
        description: "",
        attributes: []
    };
    policies.push(policy);
    renderPoliciesTable();
    document.getElementById("policy-create-form").reset();
});

// initial rendering of policies table
renderPoliciesTable();