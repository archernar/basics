/**
 * =================================================================
 * Extensive Console Logging Library
 *
 * A feature-rich, level-based logging utility for the browser.
 * =================================================================
 */

// Define Log Levels
export const LogLevels = {
  SILENT: 0, // No logs
  ERROR: 1,  // Only errors
  WARN: 2,   // Errors and warnings
  INFO: 3,   // Errors, warnings, and info
  DEBUG: 4,  // All logs
};

// --- Private State ---
const config = {
  level: LogLevels.DEBUG, // Default to all logs
  prefix: 'App',
  useTimestamp: true,
};

// --- Private Helpers ---

/**
 * Checks if the logger should log for a given level.
 * @param {number} level - The level of the message to log.
 * @returns {boolean} - True if the message should be logged.
 */
const shouldLog = (level) => config.level >= level;

/**
 * Gets the current timestamp as a string.
 * @returns {string} - Formatted timestamp.
 */
const getTimestamp = () => new Date().toLocaleTimeString('en-US', { hour12: false });

/**
 * Prepares the arguments to be passed to console.log.
 * @param {number} level - The LogLevel of the message.
 * @param {Array<any>} args - The original arguments.
 * @returns {Array<any>} - The new arguments with prefixes.
 */
const prepareArgs = (level, args) => {
  const parts = [];
  const levelStr = Object.keys(LogLevels).find(key => LogLevels[key] === level) || 'LOG';
  
  if (config.useTimestamp) {
    parts.push(`[${getTimestamp()}]`);
  }
  
  parts.push(`[${config.prefix}]`);
  parts.push(`[${levelStr}]`);
  
  return [parts.join(''), ...args];
};

/**
 * A helper for logging with custom CSS.
 * @param {string} message - The message (use %c for styling).
 * @param {string} css - The CSS string.
 * @param {Function} logMethod - The console method (e.g., console.log).
 */
const logStyled = (message, css, logMethod = console.log) => {
  logMethod(`%c${message}`, css);
};

// --- Public API ---

/**
 * Sets the global log level for the application.
 * @param {number|string} level - The log level (e.g., LogLevels.INFO or 'INFO').
 */
export const setLogLevel = (level) => {
  if (typeof level === 'string' && LogLevels.hasOwnProperty(level.toUpperCase())) {
    config.level = LogLevels[level.toUpperCase()];
  } else if (typeof level === 'number') {
    config.level = level;
  }
  info(`Log level set to: ${Object.keys(LogLevels).find(key => LogLevels[key] === config.level)} (${config.level})`);
};

/**
 * Sets the prefix for all log messages.
 * @param {string} prefix - The new prefix.
 */
export const setLogPrefix = (prefix) => {
  config.prefix = prefix;
};

/**
 * Enables or disables the timestamp prefix.
 * @param {boolean} useTimestamp - True to enable.
 */
export const setUseTimestamp = (useTimestamp) => {
  config.useTimestamp = !!useTimestamp;
};

/**
 * Logs a DEBUG message. (Most verbose)
 * @param {...any} args - Messages or objects to log.
 */
export const debug = (...args) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.debug(...prepareArgs(LogLevels.DEBUG, args));
};

/**
 * Logs an INFO message.
 * @param {...any} args - Messages or objects to log.
 */
export const info = (...args) => {
  if (!shouldLog(LogLevels.INFO)) return;
  console.info(...prepareArgs(LogLevels.INFO, args));
};

/**
 * Logs a WARN message.
 * @param {...any} args - Messages or objects to log.
 */
export const warn = (...args) => {
  if (!shouldLog(LogLevels.WARN)) return;
  console.warn(...prepareArgs(LogLevels.WARN, args));
};

/**
 * Logs an ERROR message.
 * @param {...any} args - Messages or objects to log.
 */
export const error = (...args) => {
  if (!shouldLog(LogLevels.ERROR)) return;
  console.error(...prepareArgs(LogLevels.ERROR, args));
};

/**
 * A general-purpose log that respects the INFO level.
 * @param {...any} args - Messages or objects to log.
 */
export const log = (...args) => {
  if (!shouldLog(LogLevels.INFO)) return;
  console.log(...prepareArgs(LogLevels.INFO, args));
};

/**
 * Logs a message with custom CSS styling.
 * This will log regardless of level unless SILENT.
 * @param {string} message - The message to log (use %c placeholders).
 * @param {string|string[]} styles - The CSS styles to apply.
 */
export const styled = (message, styles) => {
  if (!shouldLog(LogLevels.ERROR)) return; // Use ERROR level as minimum
  
  // If only one style is provided, wrap it in an array
  const styleArray = Array.isArray(styles) ? styles : [styles];
  
  // Count placeholders
  const placeholderCount = (message.match(/%c/g) || []).length;
  
  // Pad styles if not enough are provided
  while (styleArray.length < placeholderCount) {
    styleArray.push('');
  }
  
  console.log(message, ...styleArray);
};

/**
 * Logs a "success" message in green.
 * @param {string} message - The message to log.
 */
export const success = (message) => {
  if (!shouldLog(LogLevels.INFO)) return;
  const css = 'color: green; font-weight: bold;';
  logStyled(`${prepareArgs(LogLevels.INFO, [message]).join(' ')}`, css, console.info);
};

/**
 * Logs a "failure" or "danger" message in red.
 * @param {string} message - The message to log.
 */
export const danger = (message) => {
  if (!shouldLog(LogLevels.ERROR)) return;
  const css = 'color: red; font-weight: bold;';
  logStyled(`${prepareArgs(LogLevels.ERROR, [message]).join(' ')}`, css, console.error);
};

/**
 * Logs a "highlight" message in blue.
 * @param {string} message - The message to log.
 */
export const highlight = (message) => {
  if (!shouldLog(LogLevels.INFO)) return;
  const css = 'color: #007bff; font-weight: bold;';
  logStyled(`${prepareArgs(LogLevels.INFO, [message]).join(' ')}`, css, console.info);
};

/**
 * Logs an image from a URL to the console.
 * @param {string} url - The URL of the image.
 * @param {number} scale - A multiplier to scale the image (e.g., 0.5 for half size).
 */
export const image = (url, scale = 1) => {
  if (!shouldLog(LogLevels.INFO)) return;
  
  const img = new Image();
  img.onload = () => {
    const w = img.width * scale;
    const h = img.height * scale;
    const css = [
      'font-size: 1px;',
      `padding: ${Math.floor(h / 2)}px ${Math.floor(w / 2)}px;`,
      `line-height: ${h}px;`,
      `background: url(${url});`,
      `background-size: ${w}px ${h}px;`,
      'color: transparent;'
    ].join(' ');
    console.log('%c ', css);
  };
  img.src = url;
};

/**
 * Starts a collapsed or expanded console group.
 * @param {string} label - The label for the group.
 * @param {boolean} [collapsed=false] - True to start collapsed.
 */
export const group = (label, collapsed = false) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  const method = collapsed ? console.groupCollapsed : console.group;
  method(`[${config.prefix}] ${label}`);
};

/**
 * Ends the current console group.
 */
export const groupEnd = () => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.groupEnd();
};

/**
 * Wraps a function in a console group.
 * @param {string} label - The label for the group.
 * @param {Function} fn - The function to execute inside the group.
 * @param {boolean} [collapsed=false] - True to start collapsed.
 */
export const groupWrap = (label, fn, collapsed = false) => {
  group(label, collapsed);
  try {
    fn();
  } catch (e) {
    error('Error inside group:', e);
  }
  groupEnd();
};

/**
 * Clears the console.
 */
export const clear = () => {
  console.clear();
};

/**
 * Logs a stack trace.
 * @param {string} [message] - An optional message.
 */
export const trace = (message) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.trace(message || 'Trace');
};

/**
 * Logs data as an interactive table.
 * @param {any} data - The object or array to log.
 */
export const table = (data) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.table(data);
};

/**
 * Logs an interactive directory-style view of an object.
 * @param {any} data - The object to inspect.
 */
export const dir = (data) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.dir(data);
};

/**
 * Logs an assertion failure if the condition is not met.
 * @param {boolean} condition - The condition to assert.
 * @param {string} message - The message if assertion fails.
 */
export const assert = (condition, message) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.assert(condition, `[${config.prefix}] Assertion failed: ${message}`);
};

/**
 * Starts a performance timer.
 * @param {string} label - The label for the timer.
 */
export const time = (label) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.time(`[${config.prefix}] ${label}`);
};

/**
 * Ends a performance timer and logs the result.
 * @param {string} label - The label for the timer.
 */
export const timeEnd = (label) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.timeEnd(`[${config.prefix}] ${label}`);
};

/**
 * Logs the number of times this line has been called.
 * @param {string} label - The label for the counter.
 */
export const count = (label) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.count(`[${config.prefix}] ${label}`);
};

/**
 * Resets a counter.
 * @param {string} label - The label for the counter.
 */
export const countReset = (label) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.countReset(`[${config.prefix}] ${label}`);
};

/**
 * Starts a performance profile.
 * @param {string} [label] - An optional label.
 */
export const profile = (label) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.profile(label);
};

/**
 * Stops a performance profile.
 * @param {string} [label] - An optional label.
 */
export const profileEnd = (label) => {
  if (!shouldLog(LogLevels.DEBUG)) return;
  console.profileEnd(label);
};

