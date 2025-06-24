/**
 * SpaziomonPulse - Simple Signal Pulse Generator
 * Author: Spaziomon
 * License: Custom
 */

class SpaziomonPulse {
    /**
     * Initializes a pulse generator.
     * @param {number} intervalMs - Interval between pulses in milliseconds.
     * @param {Function} callback - Function to execute on each pulse.
     */
    constructor(intervalMs, callback) {
        if (typeof intervalMs !== 'number' || typeof callback !== 'function') {
            throw new Error('[SpaziomonPulse] Invalid parameters.');
        }
        this.intervalMs = intervalMs;
        this.callback = callback;
        this.pulseId = null;
    }

    /**
     * Starts generating pulses.
     */
    start() {
        if (this.pulseId) return;
        this.pulseId = setInterval(() => {
            this.callback();
        }, this.intervalMs);
        console.log('[SpaziomonPulse] Pulse started.');
    }

    /**
     * Stops pulse generation.
     */
    stop() {
        if (this.pulseId) {
            clearInterval(this.pulseId);
            this.pulseId = null;
            console.log('[SpaziomonPulse] Pulse stopped.');
        }
    }
}

// Example usage:
// const pulse = new SpaziomonPulse(1000, () => console.log('Signal sent.'));
// pulse.start();
// setTimeout(() => pulse.stop(), 5000);

module.exports = SpaziomonPulse;
