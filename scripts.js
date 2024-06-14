function openTab(id) {
    const buttons = document.querySelectorAll('.tablinks');
    buttons.forEach(button => button.classList.remove('active'));

    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));

    const new_active_section = document.getElementById(`${id}-section`);
    new_active_section.classList.remove('hidden');

    let tab = document.getElementById(id);
    tab.classList.add('active');
}