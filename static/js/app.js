const plus = document.querySelector('.add_post'),
    add_post = document.querySelector('.new_posts'),
    back = document.querySelector('.back');


plus.addEventListener('click', () => {
    add_post.classList.add('display');
});

back.addEventListener('click', () => {
    add_post.classList.remove('display');
});


const change_btn = document.querySelector('.img'),
    change_photo = document.querySelector('.change_photo'),
    cancel = document.querySelector('.cancel');
if (change_btn) {
    change_btn.addEventListener('click', () => {
        change_photo.classList.add('active_flex')
    })
}
if (cancel) {
    cancel.addEventListener('click', () => {
        change_photo.classList.remove('active_flex');
    });
}


const heart = document.querySelectorAll('.heart');

heart.forEach(ht => {
    ht.addEventListener('click', () => {
        if (ht.style.fill === 'red') {
            ht.style.fill = 'rgb(41, 41, 41)';
        } else ht.style.fill = 'red';
    });
});


const post_next = document.querySelector('.post_next'),
    post_content = document.querySelector('.post_ct'),
    label = document.querySelector('#label'),
    x = document.querySelector('.x_bold');

if (post_next) {
    post_next.addEventListener('click', () => {
        post_content.classList.add('display');
    });

    post_next.addEventListener('click', () => {
        add_post.style.display = 'none';
    });
}

x.addEventListener('click', () => {
    post_content.classList.remove('display');
});

if (label) {
    label.addEventListener('click', () => {
        post_next.style.display = 'flex'
    });
}




