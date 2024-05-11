const apiRes = {
    employeeCount: 20,
    employeeGenderCount: {
        male: 20,
        female: 100
    }
}


document.querySelector('#employee-count').textContent = apiRes.employeeGenderCount.female