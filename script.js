// Elegant interaction effects
        document.querySelectorAll('.link-item').forEach((link, index) => {
            // Staggered entrance animation
            link.style.opacity = '0';
            link.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                link.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 200 + (index * 100));

            // Sophisticated click effect
            link.addEventListener('click', function(e) {
                const ripple = document.createElement('div');
                const rect = this.getBoundingClientRect();
                const size = Math.min(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(218, 165, 32, 0.3) 0%, transparent 70%);
                    transform: scale(0);
                    animation: elegantRipple 0.8s ease-out;
                    left: ${x}px;
                    top: ${y}px;
                    width: ${size}px;
                    height: ${size}px;
                    pointer-events: none;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 800);
            });
        });

        // Add elegant ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes elegantRipple {
                0% {
                    transform: scale(0);
                    opacity: 1;
                }
                50% {
                    transform: scale(1);
                    opacity: 0.8;
                }
                100% {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Smooth scroll reveal for enhanced UX
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Add subtle parallax effect to background
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            document.body.style.backgroundPosition = 
                `${50 + mouseX * 5}% ${50 + mouseY * 5}%`;
        });