import { Link } from 'react-router'
// import { supabase } from '../client'
import './Roadmap.css'

function Roadmap() {
    return (
        <div className="roadmap-page">
            <div className="roadmap-content">
                <div className="top-btns">
                    <Link to="/" className="back-link">
                        ← Back to Home
                    </Link>
                </div>

                <h1 className="roadmap-title">Your Roadmap</h1>

                <div className="cards">
                    <div className="roadmap-card">
                        <h2 className="card-title">Learned Skills</h2>

                        {/* onSubmit={handleAddSkill} */}
                        <form className="add-skill-form">
                            <label htmlFor="skill">
                                Skill Learned
                            </label>
                            <input
                                type="text"
                                id="skill"
                                name="skill"
                                placeholder="Enter a skill that you've learned..."
                                // value={}
                                // onChange={handleChange}
                                required
                            />

                            <label htmlFor="skill">
                                Date Learned
                            </label>
                            <input
                                type="text"
                                id="date"
                                name="date"
                                placeholder="Enter the date you learned the skill..."
                                // value={}
                                // onChange={handleChange}
                                required
                            />

                            <label htmlFor="skill">
                                Categorized Skill (1 (novice) to 10 (expert))
                            </label>
                            <input
                                type="text"
                                id="skill-level"
                                name="skill-level"
                                placeholder="Enter your current skill level..."
                                // value={}
                                // onChange={handleChange}
                                required
                            />
                        </form>
                    </div>

                    <div className="roadmap-card">
                        <h2 className="card-title">To Learn Next</h2>

                        <form className="next-skill-form">
                            <label htmlFor="skill">
                                Next Skill to Learn
                            </label>
                            <input
                                type="text"
                                id="next-skill"
                                name="next-skill"
                                placeholder="Enter a skill that you would like to learn next..."
                                // value={}
                                // onChange={handleChange}
                                required
                            />

                            <label htmlFor="skill">
                                Date to Learn By
                            </label>
                            <input
                                type="text"
                                id="goal"
                                name="goal"
                                placeholder="Enter the date you want to learn this skill by..."
                                // value={}
                                // onChange={handleChange}
                                required
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap