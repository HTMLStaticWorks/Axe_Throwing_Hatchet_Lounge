document.addEventListener('DOMContentLoaded', () => {
    const tournamentContainer = document.getElementById('tournament-calendar');

    if (tournamentContainer) {
        const events = [
            {
                name: "Ironwood Open",
                date: "June 14, 2026",
                format: "WATL Single Season",
                fee: "$35",
                prize: "$500",
                status: "Open",
                statusClass: "bg-success"
            },
            {
                name: "Summer Smash Series",
                date: "July 19, 2026",
                format: "Doubles Format",
                fee: "$50/team",
                prize: "Trophy + Bar Tab",
                status: "Registration Opens June 1",
                statusClass: "bg-warning"
            },
            {
                name: "Fall League Championship",
                date: "Sept 27, 2026",
                format: "League Only",
                fee: "Free",
                prize: "Season Trophy",
                status: "Members Only",
                statusClass: "bg-info"
            }
        ];

        renderTournaments(events, tournamentContainer);
    }

    function renderTournaments(events, container) {
        container.innerHTML = events.map(event => `
            <div class="tournament-item p-3 mb-3 border border-secondary axe-embed-hover" data-aos="fade-up">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <div class="date-badge text-center bg-dark p-2 border border-secondary">
                            <span class="d-block h4 mb-0 text-white">${event.date.split(' ')[1].replace(',', '')}</span>
                            <span class="text-uppercase small">${event.date.split(' ')[0]}</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h4 class="mb-1">${event.name}</h4>
                        <p class="text-muted small mb-0">${event.format}</p>
                    </div>
                    <div class="col-md-2">
                        <p class="mb-0 small text-uppercase">Entry Fee</p>
                        <p class="fw-bold text-white">${event.fee}</p>
                    </div>
                    <div class="col-md-2">
                        <p class="mb-0 small text-uppercase">Prize Pool</p>
                        <p class="fw-bold text-highlight">${event.prize}</p>
                    </div>
                    <div class="col-md-2 text-md-end">
                        <span class="badge ${event.statusClass} mb-2 d-block d-md-inline-block">${event.status}</span>
                        <a href="#" class="btn btn-sm btn-primary w-100 mt-2">Register</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
});
