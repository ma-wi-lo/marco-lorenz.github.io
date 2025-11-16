/**
 * Theme Toggle Script
 * Handles Dark/Light Mode switching with localStorage persistence
 * Respects user's system preference (prefers-color-scheme)
 */

(function() {
  'use strict';

  // Theme configuration
  const THEME_KEY = 'preferred-theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // Icons for theme toggle button
  const ICON_MOON = '🌙';
  const ICON_SUN = '☀️';

  /**
   * Get user's preferred theme
   * Priority: localStorage > system preference > default (dark)
   */
  function getPreferredTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY);

    if (storedTheme) {
      return storedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return THEME_LIGHT;
    }

    // Default to dark mode
    return THEME_DARK;
  }

  /**
   * Apply theme to document
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateToggleButton(theme);

    // Store preference
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      console.warn('Unable to save theme preference:', e);
    }
  }

  /**
   * Update theme toggle button icon and aria-label
   */
  function updateToggleButton(theme) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    if (theme === THEME_DARK) {
      toggleBtn.textContent = ICON_SUN;
      toggleBtn.setAttribute('aria-label', 'Switch to light mode');
      toggleBtn.setAttribute('title', 'Switch to light mode');
    } else {
      toggleBtn.textContent = ICON_MOON;
      toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      toggleBtn.setAttribute('title', 'Switch to dark mode');
    }
  }

  /**
   * Toggle between dark and light theme
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(newTheme);
  }

  /**
   * Initialize theme on page load
   */
  function initTheme() {
    const preferredTheme = getPreferredTheme();
    applyTheme(preferredTheme);
  }

  /**
   * Setup event listeners
   */
  function setupEventListeners() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);

      // Keyboard accessibility
      toggleBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      });
    }

    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      // Only update if user hasn't manually set a preference
      mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
          applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
      });
    }
  }

  // Initialize immediately to prevent flash of wrong theme
  initTheme();

  // Setup event listeners when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
  } else {
    setupEventListeners();
  }

})();
