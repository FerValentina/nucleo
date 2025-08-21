export async function fetchData() {
  try {
    const response = await fetch('/nucleo/sematData.json', { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
    const rawData = await response.json();

    const alphas = {};
    rawData.forEach(item => {
      if (!alphas[item.alfa]) {
        alphas[item.alfa] = { states: {} };
      }
      if (!alphas[item.alfa].states[item.status]) {
        alphas[item.alfa].states[item.status] = {
          order: parseInt(item.status_order),
          checklists: [],
          complete: false
        };
      }
      alphas[item.alfa].states[item.status].checklists.push({
        name: item.checklist,
        order: parseInt(item.checklist_order),
        checked: false
      });
    });

    Object.keys(alphas).forEach(alpha => {
      const statesArray = Object.keys(alphas[alpha].states).map(status => ({
        name: status,
        ...alphas[alpha].states[status]
      }));
      statesArray.sort((a, b) => a.order - b.order);
      alphas[alpha].states = statesArray;
      alphas[alpha].currentStateIndex = 0;
    });

    return alphas;
  } catch (error) {
    console.error('Error al cargar sematData.json:', error);
    return {};
  }
}