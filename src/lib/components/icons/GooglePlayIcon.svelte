<script lang="ts">
	interface Props {
		class?: string;
	}
	let { class: className = 'h-5 w-5' }: Props = $props();

	// The four brand gradients are referenced by `url(#id)`, which resolves document-wide —
	// so IDs must be unique per instance or every icon would paint with the first card's defs.
	const uid = $props.id();
</script>

<svg class={className} viewBox="0 0 24 24" aria-hidden="true">
	<defs>
		<linearGradient id="{uid}-body" x1="15.28" y1="4.31" x2="-1.61" y2="8.79">
			<stop offset="0" stop-color="#00A0FF" />
			<stop offset=".26" stop-color="#00BEFF" />
			<stop offset=".51" stop-color="#00D2FF" />
			<stop offset=".76" stop-color="#00DFFF" />
			<stop offset="1" stop-color="#00E3FF" />
		</linearGradient>
		<linearGradient id="{uid}-point" x1="20.53" y1="12" x2="1.24" y2="12">
			<stop offset="0" stop-color="#FFE000" />
			<stop offset=".41" stop-color="#FFBD00" />
			<stop offset=".78" stop-color="#FFA500" />
			<stop offset="1" stop-color="#FF9C00" />
		</linearGradient>
		<linearGradient id="{uid}-lower" x1="17.92" y1="13.83" x2="-4.57" y2="19.9">
			<stop offset="0" stop-color="#FF3A44" />
			<stop offset="1" stop-color="#C31162" />
		</linearGradient>
		<linearGradient id="{uid}-upper" x1="-1.04" y1="-1.31" x2="8.99" y2="8.72">
			<stop offset="0" stop-color="#32A071" />
			<stop offset=".07" stop-color="#2DA771" />
			<stop offset=".48" stop-color="#15CF74" />
			<stop offset=".8" stop-color="#06E775" />
			<stop offset="1" stop-color="#00F076" />
		</linearGradient>
	</defs>
	<path
		d="M1.85 1.85A2.05 2.05 0 0 0 1.5 3v18c0 .45.13.86.35 1.15l.06.07L11.6 12.1v-.2L1.9 1.79l-.05.06z"
		fill="url(#{uid}-body)"
	/>
	<path
		d="M15.1 15.42l-3.5-3.32v-.2l3.5-3.32.08.05 4.1 2.33c1.18.67 1.18 1.76 0 2.43l-4.1 2.33-.08-.3z"
		fill="url(#{uid}-point)"
	/>
	<path
		d="M15.18 15.37L11.6 12 1.85 21.75c.39.41 1.03.46 1.75.05l11.58-6.43z"
		fill="url(#{uid}-lower)"
	/>
	<path
		d="M15.18 8.63L3.6 2.2c-.72-.41-1.36-.36-1.75.05L11.6 12l3.58-3.37z"
		fill="url(#{uid}-upper)"
	/>
</svg>
