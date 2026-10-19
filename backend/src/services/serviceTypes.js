/**
 * Shared service records for editor inference and gradual checkJs adoption.
 * PostgreSQL NUMERIC amounts remain decimal strings; these are not Soroban i128s.
 * Timestamp fields may be Date objects before JSON serialization.
 * Use JSDoc import("./serviceTypes") without a runtime require.
 */
/**
 * Camel-cased job record returned by this service.
 *
 * @typedef {Object} Job
 * @property {string}   id                  UUID of the job.
 * @property {string}   title               Job title (≥10 chars).
 * @property {string}   description         Job description (≥30 chars).
 * @property {string}   budget              Budget as a fixed-point string (e.g. "500.0000000").
 * @property {("XLM"|"USDC")} currency      Payment currency.
 * @property {string}   category            Service category label.
 * @property {("public"|"private"|"invite_only")} visibility
 * @property {string[]} skills              Up to 8 skill tags.
 * @property {("open"|"in_progress"|"completed"|"cancelled"|"disputed"|"expired")} status
 * @property {string}   clientAddress       Stellar G-address of the client.
 * @property {string|null} freelancerAddress Stellar G-address of the hired freelancer, if any.
 * @property {string|null} escrowContractId Soroban contract id for the locked escrow.
 * @property {number}   applicantCount      Cached count of applications for this job.
 * @property {number}   shareCount          Number of times the job link has been shared.
 * @property {boolean}  boosted             True while the listing is Featured.
 * @property {string|Date|null} boostedUntil     ISO timestamp at which boost expires.
 * @property {string|Date|null} deadline         ISO timestamp deadline (optional).
 * @property {string|null} timezone         IANA timezone name for compatibility filtering.
 * @property {string[]} screeningQuestions  Up to 5 screening questions applicants must answer.
 * @property {Milestone[]} milestones
 * @property {string|Date|null} expiresAt
 * @property {number} extendedCount
 * @property {string|Date|null} extendedUntil
 * @property {string|Date}   createdAt           ISO timestamp when the job was created.
 * @property {string|Date}   updatedAt           ISO timestamp of last write.
 */

/**
 * Camel-cased application record returned by this service.
 *
 * @typedef {Object} Application
 * @property {string} id                 UUID of the application.
 * @property {string} jobId              UUID of the parent job.
 * @property {string} freelancerAddress  Stellar G-address of the applicant.
 * @property {string} freelancerTier     Computed freelancer tier label.
 * @property {string} proposal           Cover letter / proposal text (≥50 chars).
 * @property {string} bidAmount          Bid as a fixed-point string (e.g. "450.0000000").
 * @property {("XLM"|"USDC")} currency   Bid currency.
 * @property {("pending"|"shortlisted"|"accepted"|"rejected")} status
 * @property {Object<string,string>} screeningAnswers  Map of question → answer.
 * @property {string|Date} createdAt          ISO timestamp.
 */

/**
 * @typedef {Object} Milestone
 * @property {string} description
 * @property {string} amount Seven-decimal XLM amount.
 * @property {string} status pending, released, rejected, or disputed.
 * @property {string|Date|null} releasedAt
 * @property {string|Date|null} disputedAt
 */

/**
 * Raw snake_case escrows row, distinct from the camelCase Job service record.
 * @typedef {Object} EscrowState
 * @property {string} job_id
 * @property {string} contract_id Soroban C-address.
 * @property {string} amount_xlm Decimal XLM, not stroops.
 * @property {string} status funded, released, refunded, timeout_refunded, disputed, in_progress, or locked.
 * @property {Milestone[]} milestones
 * @property {number|string|null} [timeout_ledger] Ledger sequence, not a timestamp.
 * @property {string|Date} created_at
 * @property {string|Date} updated_at
 * @property {string|Date|null} [released_at]
 */

/**
 * Raw disputes row returned by create/resolve operations.
 * @typedef {Object} DisputeRow
 * @property {string} id
 * @property {string} job_id
 * @property {string} raised_by
 * @property {string} status
 * @property {string|Date} created_at
 * @property {string|null} [resolved_by]
 * @property {string|null} [resolution]
 * @property {string|Date|null} [resolved_at]
 */

/**
 * @typedef {Object} ApplicationStatusEntry
 * @property {string} id
 * @property {string} applicationId
 * @property {string} oldStatus
 * @property {string} newStatus
 * @property {string|null} changedBy
 * @property {string|Date} changedAt
 */

// CommonJS module marker allows editors to resolve exported JSDoc typedefs.
module.exports = {};
