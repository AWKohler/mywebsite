// jQuery Effects Implementation
// This file implements various jQuery effects for the website including:
// 1. Fade effects for images and content
// 2. Slide effects for panels and accordions
// 3. jQuery UI Autocomplete for predictive search

// Make sure the initialization function is available globally
const initializeJQuery = function() {
  // Only run if jQuery is loaded
  if (typeof jQuery === 'undefined') {
    console.error('jQuery is not loaded!');
    return;
  }

$(document).ready(function() {
    // ===============================================
    // EFFECT 1: FADE EFFECTS
    // ===============================================
    
    // Fade in elements with class "fade-in" when they come into view
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            const elementTop = $(this).offset().top;
            const elementVisible = 150;
            const windowHeight = $(window).height();
            const scrollTop = $(window).scrollTop();
            
            if (elementTop < (windowHeight + scrollTop) - elementVisible) {
                $(this).animate({ opacity: 1 }, 800);
            }
        });
    });
    
    // Button hover effect using fadeIn/fadeOut
    $('.hover-fade').hover(
        function() {
            $(this).find('.hover-content').fadeIn(300);
        },
        function() {
            $(this).find('.hover-content').fadeOut(300);
        }
    );

    // ===============================================
    // EFFECT 2: SLIDE EFFECTS
    // ===============================================
    
    // Slide toggle for project details
    $('.project-header').click(function() {
        $(this).next('.project-details').slideToggle(400);
        $(this).find('.toggle-icon').toggleClass('rotated');
    });
    
    // Accordion effect for FAQ section
    $('.accordion-header').click(function() {
        // Close all other panels
        $('.accordion-content').not($(this).next()).slideUp(300);
        $('.accordion-header').not($(this)).removeClass('active');
        
        // Toggle current panel
        $(this).next('.accordion-content').slideToggle(300);
        $(this).toggleClass('active');
    });

    // ===============================================
    // EFFECT 3: JQUERY UI AUTOCOMPLETE
    // ===============================================
    
    // Sample data for autocomplete
    const techSkills = [
        "React", "Next.js", "JavaScript", "TypeScript", 
        "Node.js", "Express", "MongoDB", "PostgreSQL",
        "HTML5", "CSS3", "Tailwind CSS", "AWS",
        "Docker", "Kubernetes", "GraphQL", "REST API",
        "Python", "Django", "Flask", "Java",
        "Spring Boot", "Go", "Ruby on Rails", "PHP",
        "Laravel", "Vue.js", "Angular", "Svelte",
        "Redux", "MobX", "jQuery", "Bootstrap",
        "Material UI", "Chakra UI", "Framer Motion"
    ];
    
    // Initialize jQuery UI Autocomplete
    $("#skill-search").autocomplete({
        source: function(request, response) {
            // Filter results based on user input
            const results = $.ui.autocomplete.filter(
                techSkills, 
                request.term
            );
            
            // Return only top 10 matches
            response(results.slice(0, 10));
        },
        minLength: 1,
        classes: {
            "ui-autocomplete": "skill-autocomplete"
        },
        select: function(event, ui) {
            // When an item is selected
            $("#search-result").html(`<p>Selected skill: <strong>${ui.item.value}</strong></p>`);
            
            // Simulating a search result
            setTimeout(function() {
                $("#search-result").append(`
                    <div class="search-result-item fade-in" style="opacity: 0">
                        <h3>${ui.item.value}</h3>
                        <p>Example projects and experience with ${ui.item.value}</p>
                    </div>
                `);
                
                $(".search-result-item").animate({ opacity: 1 }, 500);
            }, 300);
            
            return true;
        }
    });
    
    // Add clear button functionality
    $("#clear-search").click(function() {
        $("#skill-search").val("");
        $("#search-result").html("");
    });
    
    // Mobile menu toggle
    $("#mobile-menu-toggle").click(function() {
        $("#mobile-menu").slideToggle(300);
    });
    
    // Initialize on page load
    $('.fade-in').css('opacity', 0);
    $('.project-details').hide();
    $('.accordion-content').hide();
    $('.hover-content').hide();
});

};

// Run initialization either via document ready or manually from React
if (typeof document !== 'undefined') {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initializeJQuery, 1);
  } else {
    document.addEventListener('DOMContentLoaded', initializeJQuery);
  }
}

// Expose to global scope for React to call
if (typeof window !== 'undefined') {
  window.initializeJQuery = initializeJQuery;
}