import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Awards extends Component {

	getAwards = () => {
		const { awards } = this.props;
		return (!awards || awards.length === 0)
			? <div className="text-center small text-muted fst-italic p-3">This section is empty and won’t appear in your resume.</div>
			: awards.map((a, i) =>
				<div key={i} className="d-flex justify-content-between my-3">
					<div>
						<FontAwesomeIcon
							icon={solid('award')}
							className="text-secondary me-2"
							fixedWidth
						/>
					</div>
					<div className="flex-grow-1">
						<div className="fw-bold">{a.name}</div>
					</div>
					<div>
						<button className="btn btn-sm btn-outline-secondary">
							<FontAwesomeIcon icon={solid('edit')} />
						</button>
					</div>
				</div>
			)
	}

	render() {
		return (
			<>
				<div className="d-flex justify-content-between align-items-center">
					<h5 className="m-0">Honors & Awards</h5>
					<div>
						<button className="btn btn-sm btn-primary">
							<FontAwesomeIcon icon={solid('plus')} />
						</button>
					</div>
				</div>

				<div>
					{this.getAwards()}
				</div>
			</>
		);
	}
}

export default Awards;