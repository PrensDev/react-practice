import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Education extends Component {

	getEducation = () => {
		const { education } = this.props || [];

		return (!education || education.length === 0)
			? <div className="text-center small text-secondary fst-italic p-3">This section is empty and won’t appear in your resume.</div>
			: education.map((e, i) =>
				<div className="d-flex align-items-start my-3" key={i}>
					<div>
						<FontAwesomeIcon
							icon={solid('graduation-cap')}
							className="text-secondary me-2"
							fixedWidth
						/>
					</div>
					<div className="flex-grow-1">

						{/* School */}
						<div key={e.id} className="fw-bold">{e.school}</div>

						{/* Degree */}
						{e.degree && <div>{e.degree}</div>}
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
					<h5 className="m-0">Education</h5>
					<div>
						<button className="btn btn-sm btn-primary">
							<FontAwesomeIcon icon={solid('plus')} />
						</button>
					</div>
				</div>

				{this.getEducation()}
			</>
		);
	}
}

export default Education;