export default {
    template: //html
        `
		<div class="sidebar">

		<!-- Archives -->
		<div class="sidebar_section">
			<div class="sidebar_section_title">
				<h3>Archives</h3>
			</div>
			<ul class="sidebar_list">
				<li class="sidebar_list_item"><a href="#">Design Courses</a></li>
				<li class="sidebar_list_item"><a href="#">All you need to know</a></li>
				<li class="sidebar_list_item"><a href="#">Uncategorized</a></li>
				<li class="sidebar_list_item"><a href="#">About Our Departments</a></li>
				<li class="sidebar_list_item"><a href="#">Choose the right course</a></li>
			</ul>
		</div>

		<!-- Latest Posts -->

		<div class="sidebar_section">
			<div class="sidebar_section_title">
				<h3>Latest posts</h3>
			</div>

			<div class="latest_posts">

				<!-- Latest Post -->
				<div class="latest_post">
					<div class="latest_post_image">
						<img src=assets/img/latest_1.jpg" alt="https://unsplash.com/@dsmacinnes">
					</div>
					<div class="latest_post_title"><a href="news_post.html">Why do you need a qualification?</a></div>
					<div class="latest_post_meta">
						<span class="latest_post_author"><a href="#">By Christian Smith</a></span>
						<span>|</span>
						<span class="latest_post_comments"><a href="#">3 Comments</a></span>
					</div>
				</div>

				<!-- Latest Post -->
				<div class="latest_post">
					<div class="latest_post_image">
						<img src=assets/img/latest_2.jpg" alt="https://unsplash.com/@erothermel">
					</div>
					<div class="latest_post_title"><a href="news_post.html">Why do you need a qualification?</a></div>
					<div class="latest_post_meta">
						<span class="latest_post_author"><a href="#">By Christian Smith</a></span>
						<span>|</span>
						<span class="latest_post_comments"><a href="#">3 Comments</a></span>
					</div>
				</div>

				<!-- Latest Post -->
				<div class="latest_post">
					<div class="latest_post_image">
						<img src=assets/img/latest_3.jpg" alt="https://unsplash.com/@element5digital">
					</div>
					<div class="latest_post_title"><a href="news_post.html">Why do you need a qualification?</a></div>
					<div class="latest_post_meta">
						<span class="latest_post_author"><a href="#">By Christian Smith</a></span>
						<span>|</span>
						<span class="latest_post_comments"><a href="#">3 Comments</a></span>
					</div>
				</div>

			</div>

		</div>

		<!-- Tags -->

		<div class="sidebar_section">
			<div class="sidebar_section_title">
				<h3>Tags</h3>
			</div>
			<div class="tags d-flex flex-row flex-wrap">
				<div class="tag"><a href="#">Course</a></div>
				<div class="tag"><a href="#">Design</a></div>
				<div class="tag"><a href="#">FAQ</a></div>
				<div class="tag"><a href="#">Teachers</a></div>
				<div class="tag"><a href="#">School</a></div>
				<div class="tag"><a href="#">Graduate</a></div>
			</div>
		</div>

	</div>
	
	`,
    data() {
        return {
            saludo: 'hola',
            contador: 1
        }
    },


    methods: {
        sumar() {
            this.contador = this.contador + 2
        }
    },
}
