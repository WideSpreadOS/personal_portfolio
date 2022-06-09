import Layout from "./Layout.js";

export default class extends Layout {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <div class="spread-container">
                <h1>Jonny O's Projects</h1>

                
<div class="spread-container">
    <h1>Jonny O's Projects</h1>

    <div class="spread-card">
        <div class="spread-card-header">
            <h3>Kicks101</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-image">
                    <img src="" alt="">
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="spread-card">
        <div class="spread-card-header">
            <h3>WideSpread - SocialSpraed</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-image">
                    <img src="/static/images/socialspread_new-post.png" alt="">
                </div>
                <div class="spread-image">
                    <img src="/static/images/socialspread_shared-movie.png" alt="">
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="spread-card">
        <div class="spread-card-header">
            <h3>WideSpread - Entertainment</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-video">
                    <video src="/static/videos/widespread_entertainment_movies.mp4" controls loop></video>
                </div>
                <div class="spread-video">
                    <video src="/static/videos/widespread_vr_movie-player.mp4" controls loop></video>
                </div>
                <div class="spread-video">
                    <video src="/static/videos/widespread_vr-360-video-player.mp4" controls loop></video>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="spread-card">
        <div class="spread-card-header">
            <h3>WideSpread - Academy</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-image">
                    <img src="/static/images/widespread_academy_course-list.png" alt="">
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="spread-card">
        <div class="spread-card-header">
            <h3>WideSpread - Business</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-image">
                    <img src="" alt="">
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="spread-card">
        <div class="spread-card-header">
            <h3>WideSpread - Leisure</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-video">
                    <video src="/static/videos/widespread_leisure_ar-golf.mp4" controls loop></video>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="spread-card">
        <div class="spread-card-header">
            <h3>WideSpread - News</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-image">
                    <img src="" alt="">
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="spread-card">
        <div class="spread-card-header">
            <h3>WideSpread - Wellness</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-image">
                    <img src="" alt="">
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="spread-card">
        <div class="spread-card-header">
            <h3>WideSpread - VR</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-video">
                    <video src="/static/videos/widespread_vr_user-dashboard.mp4" controls loop></video>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="spread-card">
        <div class="spread-card-header">
            <h3>WideSpread - AR</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-image">
                    <img src="/static/images/spreadshield_2d-map+contacts-list.jpg" alt="">
                </div>
                <div class="spread-image">
                    <img src="/static/images/spreadshield_spreadchat_video_1.png" alt="">
                </div>
                <div class="spread-video">
                    <video src="/static/videos/spreadshield_ar-map-location-markers.mp4" controls loop></video>
                </div>
            </div>
            </div>
        </div>
    </div>

    <div class="spread-card">
        <div class="spread-card-header">
            <h3>WideSpread - IoT</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-image">
                    <img src="" alt="">
                </div>
            </div>
            </div>
        </div>
    </div>


    <div class="spread-card">
        <div class="spread-card-header">
            <h3>WideSpread - Tools</h3>
        </div>
        <div class="spread-card-body">
            <div class="spread-card-section">
                <p></p>
                <div class="spread-media-container">
                <div class="spread-image">
                    <img src="/static/images/widespread_tool_calendar.png" alt="">
                </div>
                <div class="spread-image">
                    <img src="/static/images/widespread_tool_calculator.png" alt="">
                </div>
                <div class="spread-image">
                    <img src="/static/images/widespread_tool_encyclopedia.png" alt="">
                </div>
            </div>
            </div>
        </div>
    </div>

</div>

            </div>
        `;
    }
}