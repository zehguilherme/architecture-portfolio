export function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1500 1500"
      name="logo"
      {...props}
    >
      <path
        fill="#B6939A"
        opacity={1}
        d="M815 1501H1V1h1500v1500H815M272.314 750.5c0 52.808.038 105.616-.073 158.423-.009 4.113.774 5.88 5.44 5.872 78.296-.135 156.592-.132 234.887-.006 4.497.007 5.534-1.442 5.525-5.73-.13-62.802.11-125.607-.28-188.407-.069-11.044-1.329-22.418-4.207-33.053-17.629-65.143-84.579-103.887-149.687-85.913-50.532 13.95-81.04 47.745-89.888 99.474-2.695 15.75-1.26 32.207-1.717 49.34m445.556 62.995l19.996-46.524c1.063 1.676 1.218 3.1 1.28 4.527.726 16.647 1.433 33.294 2.156 49.941.348 8.03.046 8.399-8.064 9.926-.454.086-.819.647-1.52 1.234h31.573c-10.976-4.009-10.91-4.012-11.427-15.774-.702-15.98-1.431-31.96-2.308-47.932-.745-13.59-.845-13.584 11.319-17.881-4.038-.305-8.15.151-12.116-.415-5.537-.791-8.023 1.647-10.053 6.466-7.435 17.646-15.24 35.136-22.917 52.68-.852 1.945-1.781 3.857-3.07 6.637-1.248-2.35-2.112-3.883-2.89-5.458-8.996-18.218-17.927-36.469-27.034-54.631-1.054-2.102-2.896-5.111-4.654-5.318-5.745-.678-11.62-.255-17.445-.255 10.916 5.056 10.892 5.056 10.635 17.15-.323 15.16-.568 30.322-.913 45.481-.186 8.126.624 16.87-10.442 19.243h24.291c-10.68-1.863-10.528-9.763-10.351-17.721.32-14.494.59-28.989.917-43.483.026-1.166.337-2.327.737-4.924l32.422 66.283 1.638-.366c2.64-6.065 5.28-12.13 8.24-18.886m122.3-111.523l-5.071.54c.39 1.09.767 1.413 1.149 1.42 12.147.242 24.307.903 36.44.573 24.429-.664 41.997-17.74 43.038-41.172.965-21.708-14.494-38.94-38.776-41.408-13.174-1.34-26.581-.387-39.884-.423-.642-.002-1.285.43-3.071 1.07 2.677.424 4.113.668 5.555.876 3.692.533 5.633 2.604 5.633 6.383-.002 21.979.104 43.96-.192 65.934-.028 2.04-2.615 4.044-4.822 6.207m211.51 50.875c-17.096-5.616-34.503-.231-51.708-2.02 11.868 3.283 9.973 4.1 10.067 14.372.165 17.97.051 35.943.044 53.915-.004 10.18-.013 10.176-9.59 12.418-.218.051-.35.472-.644.896.444.191.825.495 1.213.502 12.138.24 24.29.913 36.414.569 22.178-.63 39.193-15.066 42.37-35.206 3.297-20.896-6.464-37.008-28.165-45.446m-8.057-132.809c-11.83.74-22.569 4.376-31.403 12.49-13.588 12.48-16.988 32.672-8.651 50.057 8.13 16.956 25.14 25.353 45.39 22.407 22.792-3.314 39.807-23.607 38.352-45.74-1.53-23.297-18.738-39.09-43.688-39.214m-131.356 150.22l54.762 64.865 1.43-.687v-5.857c0-19.32-.02-38.639.01-57.958.012-8.293-.88-17.114 10.284-19.579H955.28c7.895 3.407 9.65 5.785 9.704 14.582.092 14.822.044 29.645.028 44.467-.001 1.426-.185 2.852-.335 5.008-1.252-1.068-2.051-1.571-2.623-2.262-16.242-19.63-32.447-39.292-48.717-58.898-1.103-1.33-2.62-3.165-4.03-3.245-6.235-.355-12.501-.154-18.756-.154.748 1.351 1.6 1.73 2.476 2.042 7.443 2.65 8.51 4.13 8.512 11.904.003 16.322.019 32.643-.007 48.965-.013 8.191.73 16.844-10.413 18.995h23.87c-8.035-3.37-9.886-5.882-9.934-14.94-.088-16.82-.039-33.642-.01-50.463.001-1.18.298-2.358.585-4.474 2.514 2.902 4.35 5.022 6.636 7.69M749.934 643.507c0-3-.006-5.999.003-8.998.03-9.58.275-9.868 9.648-11.633.178-.034.281-.458.59-1.002h-31.097c12.805 3.556 9.842 4.351 10.112 15.106.309 12.322-.431 24.687.296 36.974.362 6.107 1.863 12.708 4.815 17.985 6.583 11.767 23.063 16.665 38.049 12.539 13.069-3.6 21.06-13.934 21.45-28.535.321-11.988.173-23.991.099-35.987-.05-7.955.118-15.651 10.152-18.002h-26.507c9.898 3.708 12.27 5.826 12.378 12.483.237 14.822.442 29.667-.115 44.474-.43 11.404-7.46 19.482-17.372 21.796-15.953 3.723-29.288-4.497-31.384-20.808-1.497-11.654-.822-23.587-1.117-36.392m104.84 166.05l-30.189-61.764c-1.439 3.035-2.175 4.482-2.822 5.967-8.565 19.682-17.03 39.408-25.716 59.036-3.61 8.158-6.065 17.502-16.82 19.658h29.936c-.571-.89-1.18-1.139-1.812-1.232-10.247-1.507-12.728-5.752-8.75-15.506 2.953-7.24 6.011-14.452 9.45-21.467.784-1.6 3.261-3.17 5.074-3.314 5.46-.434 10.984.013 16.469-.224 3.185-.137 4.753 1.196 6.026 3.952 3.978 8.609 8.218 17.097 12.302 25.657 3.92 8.215 3.31 9.456-5.264 11.257-.174.036-.252.53-.419.912h29.588c-5.847-1.797-8.655-6.328-11.182-11.078-1.952-3.67-3.715-7.441-5.871-11.853m275.43-27.004c-4.49 10.385-8.848 20.83-13.514 31.137-3.555 7.852-6.095 16.77-16.457 18.78h29.943c-.568-.89-1.166-1.15-1.79-1.244-10.3-1.542-12.77-5.732-8.8-15.478 2.95-7.24 6.044-14.434 9.431-21.477.74-1.537 2.936-3.21 4.57-3.329 5.632-.412 11.318 0 16.97-.23 3.163-.13 4.766 1.142 6.046 3.916 4.043 8.763 8.366 17.395 12.502 26.115 3.731 7.868 3.074 9.095-5.42 10.805-.181.036-.27.524-.477.957h29.63c-7.842-2.48-10.422-9.307-13.47-15.492-10.298-20.896-20.4-41.889-30.598-62.835-.84-1.725-1.83-3.376-3.43-6.306-5.293 12.161-10.045 23.082-15.136 34.681m-535.03-32.012c-3.064-2.467-3.088.875-3.66 2.163-5.207 11.707-10.224 23.499-15.379 35.23-5.02 11.423-10.01 22.862-15.27 34.175-2.236 4.81-5.549 8.76-11.504 9.201-.436.032-.827.677-1.429 1.204h30.717c-.523-.915-1.09-1.195-1.686-1.279-10.737-1.502-13.186-5.608-9.068-15.604 2.915-7.076 6.142-14.025 9.027-21.113 1.091-2.68 2.59-3.896 5.57-3.793 5.489.19 10.993.189 16.482-.002 2.94-.103 4.509 1.055 5.723 3.664 4.143 8.901 8.532 17.688 12.744 26.557 3.553 7.48 2.817 8.891-5.207 10.651-.188.041-.288.487-.567.995h29.327c-7.187-2.504-9.972-8.653-12.877-14.586-10.907-22.27-21.73-44.58-32.942-67.463m80.165-52.924c-.094-22.49-.26-44.979-.14-67.467.01-1.71 1.665-4.27 3.218-4.974 10.103-4.583 21.745 1.32 24.369 12.05.441 1.806.782 3.636 1.169 5.455l1.24-.14 1.144-23.485c-3.356.827-6.261 2.13-9.183 2.167-17.824.222-35.653.25-53.478.098-3.105-.027-6.199-1.217-9.446-1.901l-1.74 23.382c1.614-1.202 2.163-2.657 2.66-4.129 3.82-11.324 10.723-15.652 22.475-14.387 4.459.48 6.534 2.542 6.472 7.083-.11 7.998-.007 15.998-.005 23.997.002 12.5.035 24.998-.024 37.497-.036 7.412-1.291 8.685-8.543 9.342-1.134.103-2.246.452-3.368.687l.156.706h33.69c-3.224-1.607-6.8-3.389-10.666-5.981m-81.913-35.497c-5.022-3.265-10.262-6.247-14.989-9.895-3.086-2.383-6.089-5.365-7.95-8.731-2.906-5.251-2.652-10.997.975-16.053 3.415-4.76 8.475-5.448 13.869-4.774 8.54 1.067 12.06 7.464 15.104 14.33.728 1.642 1.353 3.33 2.025 4.998.558-4.751.396-9.197.61-13.624.166-3.402-1.238-5.232-4.408-6.206-9.207-2.832-18.345-3.28-27.305.759-9.332 4.206-14.265 13.46-11.057 22.931 1.553 4.584 5.062 8.994 8.773 12.24 5.218 4.563 11.507 7.884 17.226 11.896 5.037 3.534 8.85 8.052 10.254 14.253 2.886 12.741-6.083 21.386-18.764 18.184-6.138-1.55-10.063-5.69-13.033-10.868-2.265-3.95-4.141-8.12-6.19-12.194-.698 5.57-.184 10.955-.04 16.35.092 3.466 1.533 5.467 4.73 6.738 9.156 3.64 18.454 4.376 27.83 1.319 11.241-3.667 17.638-13.95 15.627-24.696-1.43-7.637-6.597-12.466-13.287-16.957m358.556 20.366c-.008 3.995-.008 7.99-.026 11.984-.02 4.674-1.843 7.668-7.021 7.718-1.099.01-2.192.501-3.288.77l.184.692h31.754c-1.022-.763-1.34-1.186-1.723-1.259-8.878-1.696-9.008-1.808-9.02-10.83-.022-18.142-.01-36.284-.008-54.426 0-11.35.004-11.35 10.948-15.2h-32.178c10.376 3.272 10.377 3.272 10.378 14.616v45.935m-342.135 206.97c-3.843 8.299-1.917 16.117 5.076 19.91 4.158 2.255 8.428 4.317 12.718 6.314 4.422 2.06 8.518.698 9.88-3.486-3.635 1.424-7.236 3.371-9.533.454 3.21-4.47 7.095-8.105 8.72-12.564 2.295-6.297-1.434-12.966-7.25-15.834-6.535-3.224-13.8-1.492-19.611 5.205m323.022 7.048c-.318-4.479.672-9.146-.644-13.481l-2.625.095v18.996l-2.005.504-16.955-20.88c-2.502 7.563-1.854 26.761 1.58 30.264v-21.13l1.61-.343 16.992 21.121 2.046-.977v-14.169m-331.964 10.086l-3.106-4.646c.834-.748 1.398-1.323 2.03-1.81 3.471-2.67 4.278-6.22 3.278-10.267-1.012-4.095-4.107-6.185-7.948-6.565-4.366-.431-8.807-.1-12.959-.1v27.665l1.518.162c.33-1.103.824-2.185.958-3.31.589-4.922 5.752-7.666 9.64-4.782 1.798 1.335 2.815 3.679 4.377 5.392.995 1.093 2.338 1.869 3.526 2.787l.795-.976c-.566-.985-1.133-1.97-2.11-3.55m390.498 1.318l1.851 2.91c.481-.94 1.248-1.836 1.397-2.826.833-5.542 2.705-7.155 8.02-5.57 1.921.572 3.352 2.883 4.932 4.475 1.437 1.446 2.772 2.992 4.153 4.495l1.42-1.191-5.457-8.518c5.169-3.24 7.068-7.466 5.095-12.679-1.959-5.177-6.623-6.042-11.525-6.057-1.664-.005-3.347.157-4.988-.037-3.59-.423-5.133.804-4.987 4.647.245 6.48.07 12.975.09 20.351m68.055-9.736c-.32-8.484-4.486-13.94-11.59-15.174-7.22-1.254-14.046 2-16.618 8.128-2.243 5.345-1.694 10.528 2.049 15.008 4.04 4.836 9.545 6.038 15.411 4.64 6.069-1.448 9.681-5.553 10.748-12.602m-249.022 11.802c1 .337 1.998.676 4.167 1.41l-6.508-9.55c.689-.578 1.133-1.033 1.651-1.375 3.85-2.537 4.949-6.183 3.876-10.44-1.066-4.228-4.292-6.397-8.367-6.762-4.221-.379-8.503-.085-12.513-.085v27.657l1.605.165 1.142-8.024c7.395-3.143 11.36.805 14.947 7.004m274.072.064l3.786 1.192-6.193-9.672c4.993-2.886 7.047-6.807 5.356-11.981-1.733-5.3-6.2-6.524-11.173-6.584-3.267-.04-6.536-.008-9.525-.008v27.84l1.61.125 1.117-7.94c7.512-3.284 11.37.898 15.022 7.028m-113.736-1.86c-5.644-2.084-1.678-6.286-2.683-9.823l13.933-.618.14-1.357c-.928-.343-1.84-.928-2.785-.984-2.491-.149-5.002-.184-7.494-.05-3.103.167-3.855-1.318-4.029-4.202-.248-4.097 1.087-5.83 5.318-5.427 2.804.267 5.666.115 8.486-.086.804-.057 1.55-.938 2.323-1.44-.13-.31-.262-.618-.392-.926h-18.503v27.195h19.262l.075-1.859c-4.236-.129-8.471-.258-13.651-.423M721.46 885.771l8.138-.476-.102-1.795h-18.674v26.954H730.1l.16-1.343c-1.095-.291-2.18-.79-3.284-.835-2.993-.122-6.006-.23-8.987-.016-4.33.313-4.23-2.41-4.314-5.452-.088-3.202.636-5.08 4.386-4.786 3.223.251 6.481.052 9.723.052l-.026-2.745c-2.995 0-6.006-.199-8.98.049-4.006.333-5.09-1.385-5.147-5.215-.083-5.706 3.846-4.128 7.829-4.392m119.235 15.895c-1.59-3.474-2.997-7.05-4.828-10.392-1.579-2.883-3.641-5.5-5.49-8.234-1.704 2.701-3.675 5.273-5.058 8.13-3.066 6.328-5.837 12.8-8.728 19.214l1.187 1.17c3.638-3.667 5.719-8.367 12.603-8.362 6.886.004 9.297 4.557 13.055 8.33l1.025-1.158c-1.155-2.67-2.31-5.34-3.766-8.698m-265.554 5.359c-3.255-7.117-6.462-14.256-9.82-21.324-.502-1.058-1.661-2.392-2.614-2.474-.856-.074-2.238 1.21-2.716 2.215-3.574 7.518-7.005 15.105-10.405 22.704-.334.745-.162 1.717-.225 2.584l.899.954c2.81-5.33 6.236-7.963 12.674-8.444 7.038-.527 8.591 5.231 12.61 8.105l.735-.966c-.286-.902-.572-1.803-1.138-3.354m544.933-18.645c-1.063 4.87 1.339 7.575 5.694 8.988 2.05.665 4.382.808 6.157 1.89 1.903 1.16 3.302 3.147 4.92 4.772-1.93 1.475-3.708 3.832-5.83 4.198-2.575.444-5.443-.781-8.18-1.307-.977-.187-1.941-.439-2.911-.66 2.377 4.842 6.714 5.496 10.759 4.736 3.076-.577 6.7-2.356 8.467-4.777 2.376-3.254.594-6.793-3.115-8.554-2.376-1.128-5.01-1.718-7.543-2.504-2.744-.853-5.852-1.576-5.374-5.34.495-3.892 3.823-4.312 6.846-4.254 2.682.051 5.353.773 8.362 1.253-3.716-6.019-13.51-5.268-18.252 1.559m-469.081 22.265c8.972 1.457 14.18-.777 15.236-7.679.92-6.019.46-12.255.49-18.395.003-.512-.902-1.027-2.223-2.43-.26 2.593-.512 4.114-.545 5.638-.085 3.994.123 8.004-.148 11.982-.41 6.025-3.342 8.732-8.796 8.577-5.154-.147-7.805-2.946-8.017-8.783-.156-4.324.01-8.659-.12-12.984-.036-1.214-.61-2.413-.936-3.62l-2.027.292c.42 7.952-2.082 16.068 2.174 23.776.798 1.445 2.781 2.236 4.912 3.626m443.984-15.134v14.88h19.687l-.004-2.135c-3.274 0-6.549.005-9.823 0-7.11-.012-7.13-.016-6.749-7.208.05-.925.425-1.834.836-3.516h13.331l-.019-2.183c-3.472 0-6.948-.08-10.417.026-2.73.083-3.641-1.012-3.865-3.79-.364-4.516 1.095-6.437 5.77-5.897 2.622.304 5.316.144 7.963-.024.868-.055 1.692-.795 2.535-1.222l-.306-1.042h-18.94v12.111m-223.549 15.533h8.245l-.02-2.787h-8.925c-8.005-.005-8.013-.006-7.62-7.816.032-.625.26-1.24.448-2.091l14.365-.714c-.955-1.302-1.132-1.777-1.337-1.79-3.29-.2-6.584-.426-9.879-.47-2.366-.032-3.574-.724-3.71-3.411-.293-5.804-.088-6.18 5.84-6.22 2.658-.017 5.324.087 7.97-.093.84-.057 1.628-.857 2.44-1.318l-.353-.966h-18.578v27.676h11.114m-93.75-4.81c-7.9 4.879-14.256 1.594-14.612-7.599-.116-2.987.025-5.983-.057-8.972-.06-2.167-.293-4.33-.449-6.494-1.586.531-2.438 1.218-2.444 1.91-.045 5.645-.353 11.336.243 16.925.677 6.35 5.226 9.442 12.077 9.144 6.048-.262 10.043-3.789 10.444-9.883.348-5.295.15-10.63.074-15.944-.01-.76-.694-1.512-1.066-2.267-1.406 2.045-1.595 4.016-1.813 5.983-.612 5.522-1.236 11.044-2.396 17.198m-31.993 3.474c.07-5.977.364-11.963.13-17.929-.167-4.263.744-6.714 5.663-6.09 1.269.162 2.658-.626 3.992-.978l-.275-1.247h-22.05l-.215 1.427c1.366.293 2.767.944 4.09.813 4.407-.438 5.926 1.387 5.686 5.728-.293 5.3-.13 10.63-.014 15.945.034 1.528-.708 4.169 2.993 2.331m204.765-26.766h-12.898l-.048 2.122c1.635.237 3.299.79 4.9.647 3.869-.347 4.872 1.419 4.727 4.981-.223 5.48-.128 10.976.004 16.461.032 1.319.745 2.621 1.145 3.93l1.582-.178c.147-1.54.404-3.078.421-4.62.056-4.988.201-9.986-.032-14.964-.184-3.947.987-5.97 5.296-5.627 1.425.113 2.921-.668 4.385-1.04l-.288-1.712h-9.194m-265.934.19c-.161 2.48-.126 2.841 2.879 2.553 4.79-.46 6.03 1.594 5.754 6.015-.321 5.143-.151 10.325-.012 15.484.036 1.313.766 2.606 1.176 3.908l1.563-.216c.143-1.545.392-3.09.408-4.637.055-5.33.126-10.662-.005-15.99-.078-3.15 1.078-4.607 4.348-4.52 1.745.047 3.506-.465 5.26-.726l-.117-2.007c-6.816 0-13.633 0-21.254.136m339.205 17.318c-.586-5.76 1.245-11.797-1.48-18.183-2.862 5.418-2.414 26.087 1.48 29.878V900.45m-123.378 1.93v-19.274c-4.172 3.341-3.98 25.19-.463 28.349.176-3.103.319-5.614.463-9.076m-221.622-3.897c-.508-5.114 1.125-10.5-1.415-16.255-2.907 5.332-2.504 26.048 1.415 28.655v-12.4z"
      />
      <path
        fill="#F6F2F2"
        opacity={1}
        d="M272.315 750c.456-16.633-.979-33.09 1.716-48.84 8.849-51.73 39.356-85.524 89.888-99.474 65.108-17.974 132.058 20.77 149.687 85.913 2.878 10.635 4.138 22.009 4.207 33.053.39 62.8.15 125.605.28 188.408.009 4.287-1.028 5.736-5.525 5.729-78.295-.126-156.59-.129-234.886.006-4.667.008-5.45-1.759-5.441-5.872.11-52.807.073-105.615.074-158.923m83.85-140.558c-8.192 4.05-16.909 7.304-24.487 12.29-33.235 21.864-52.638 52.773-53.362 92.681-1.143 62.973-.28 125.983-.25 188.977.001 1.752.194 3.505.286 5.058.95.244 1.27.398 1.591.399 40.162.036 80.324.04 120.487.12 3.794.008 4.442-1.82 3.99-5.077-1.712-12.375-3.284-24.768-4.952-37.149-.788-5.845-1.674-11.678-2.516-17.516l-1.865.144c.566 11.033 1.172 22.065 1.65 33.102.058 1.36-.257 2.966-1.003 4.038-.377.542-2.87.526-3.079.104-.666-1.345-.95-3.003-.913-4.53.025-1.06 1.205-2.101 1.212-3.156.09-13.253.059-26.508.059-40.656-12.21 0-24.504.142-36.792-.068-5.07-.087-7.557 1.956-8.626 6.874-3.113 14.321-6.559 28.57-9.746 42.875-.452 2.032-.044 4.242-.318 6.332-.176 1.336-.605 2.84-1.452 3.801-.407.463-2.796.137-2.98-.338-.543-1.404-.896-3.195-.49-4.592.95-3.256 2.758-6.28 3.559-9.558 3.122-12.782 5.749-25.689 9.096-38.408.983-3.738 3.736-7.01 5.76-10.643-5.43-3.708-7.286-8.44-4.75-14.044 2.907 1.169 5.718 2.918 8.735 3.413 19.195 3.145 37.866 2.44 54.93-8.495 11.886-7.616 22.382-16.819 31.2-27.817 2.33-2.905 4.819-6.525 5.087-9.983.227-2.915-2.66-6.072-3.91-8.6 6.783 1.619 10.461 5.111 9.421 12.476-1.29 9.131-3.505 18.285-6.606 26.971-4.705 13.183-14.333 21.788-27.924 25.722-1.045.302-2.042.773-3.061 1.166 5.85 1.51 11.236 3.407 15.864 6.453 3.373 2.22 5.963 5.789 8.53 9.05 10.787 13.7 21.458 27.494 32.08 41.326.7.913 1.068 2.542.77 3.61-.216.776-2.1 1.864-2.687 1.597-1.18-.536-2.25-1.766-2.871-2.965-.731-1.41-.533-3.393-1.435-4.611-10.301-13.928-20.98-27.583-31.064-41.665-9.36-13.071-22.551-8.76-34.987-9.387 0 1.592-.097 2.425.014 3.23 2.784 20.13 5.759 40.234 8.277 60.396.643 5.148 2.715 6.664 7.682 6.637 30.663-.166 61.328-.198 91.99.032 4.988.037 6.028-1.592 6.017-6.253-.144-60.327-.036-120.655-.174-180.982-.018-7.633-.317-15.412-1.78-22.87-9.82-50.067-46.668-85.98-96.827-94.646-5.603-.968-11.36-1.043-17.488-1.571v6.598c0 17.498-.008 34.997.007 52.495.003 3.541-.94 7.388 4.044 8.935 1.184.367 2.443 2.593 2.525 4.03.27 4.747 3.152 6.808 6.988 8.763 17.41 8.87 29.425 22.62 35.978 41.037 2.058 5.787.513 8.09-5.57 8.545-9.134.683-18.297 1.025-27.408 1.909-2.338.227-5.049 1.421-6.7 3.064-6.75 6.717-16.565 6.7-23.149-.086-1.517-1.564-4.04-2.772-6.21-2.975-9.282-.87-18.611-1.22-27.91-1.923-6.444-.487-7.757-2.684-5.491-8.898 6.11-16.762 16.255-30.96 32.47-38.244 9.148-4.109 9.079-14.182 16.634-18.34.497-.275.346-1.888.347-2.878.019-18.998-.057-37.997.076-56.994.027-3.769-1.372-5.35-4.99-4.656-10.272 1.968-20.523 4.043-31.532 6.324m14.36 83.528c-12.07 9.173-20.52 20.777-24.757 35.476 12.606 4.086 87.29 4.173 97.181-.17-.49-1.511-.908-3.093-1.508-4.603-6.596-16.623-17.744-29.15-33.838-37.057-4.468-2.195-7.569-4.969-8.587-10.169-.292-1.49-3.022-3.334-4.749-3.46-1.507-.112-4.378 1.793-4.565 3.103-.82 5.763-4.414 8.553-9.208 10.808-3.29 1.547-6.275 3.738-9.968 6.072m15.98 42.348c3.59 5.752 11.739 5.853 15.726-.204-5.197 0-10.14 0-15.726.204z"
      />
      <path
        fill="#FCFBFB"
        opacity={1}
        d="M717.71 813.84c-2.8 6.41-5.44 12.476-8.08 18.541l-1.638.366-32.422-66.283c-.4 2.597-.711 3.758-.737 4.924-.328 14.494-.596 28.989-.917 43.483-.177 7.958-.329 15.858 10.351 17.721h-24.29c11.065-2.373 10.255-11.117 10.44-19.243.346-15.16.591-30.321.914-45.482.257-12.093.28-12.093-10.635-17.149 5.825 0 11.7-.423 17.445.255 1.758.207 3.6 3.216 4.654 5.318 9.107 18.162 18.038 36.413 27.034 54.631.778 1.575 1.642 3.107 2.89 5.458 1.289-2.78 2.218-4.692 3.07-6.637 7.677-17.544 15.482-35.034 22.917-52.68 2.03-4.82 4.516-7.257 10.053-6.466 3.966.566 8.078.11 12.116.415-12.164 4.297-12.064 4.291-11.319 17.881.877 15.972 1.606 31.951 2.308 47.932.516 11.762.45 11.765 11.427 15.774H731.72c.7-.587 1.065-1.149 1.519-1.234 8.11-1.527 8.412-1.895 8.064-9.926-.723-16.647-1.43-33.294-2.155-49.94-.063-1.429-.218-2.852-1.28-4.528a77457.393 77457.393 0 01-20.158 46.87zM840.573 701.901c1.803-2.092 4.39-4.097 4.418-6.136.296-21.975.19-43.955.192-65.934 0-3.779-1.94-5.85-5.633-6.383-1.442-.208-2.878-.452-5.555-.876 1.786-.64 2.43-1.072 3.071-1.07 13.303.036 26.71-.916 39.884.423 24.282 2.468 39.74 19.7 38.776 41.408-1.041 23.432-18.61 40.508-43.038 41.172-12.133.33-24.293-.331-36.44-.573-.382-.007-.758-.33-1.15-1.42 1.691-.18 3.381-.36 5.475-.61m22.577-77.893c-4.42.595-7.046 3.047-7.062 7.567-.072 20.457-.082 40.915.009 61.372.02 4.736 2.52 7.643 7.32 8.697 15.168 3.333 30.763-4.75 36.751-19.094 3.583-8.582 3.773-17.535 2.678-26.506-2.701-22.14-16.787-33.674-39.696-32.036zM1052.061 752.952c21.32 8.333 31.08 24.445 27.784 45.341-3.177 20.14-20.192 34.576-42.37 35.206-12.123.344-24.276-.328-36.414-.569-.388-.007-.77-.31-1.213-.502.294-.424.426-.845.644-.896 9.577-2.242 9.586-2.238 9.59-12.418.007-17.972.121-35.945-.044-53.915-.094-10.272 1.8-11.09-10.067-14.373 17.205 1.79 34.612-3.595 52.09 2.126m6.725 68.305c8.945-10.01 10.288-22.116 9.019-34.675-2.35-23.24-17.442-36.09-39.007-33.658-5.606.632-7.857 2.778-7.88 8.278-.083 20.14-.094 40.28.03 60.42.036 5.879 2.528 8.56 8.392 9.177 10.892 1.149 20.899-.881 29.446-9.542zM1044.097 620.03c24.476.131 41.683 15.925 43.214 39.222 1.455 22.133-15.56 42.426-38.351 45.74-20.252 2.946-37.26-5.45-45.391-22.407-8.337-17.385-4.937-37.578 8.651-50.058 8.834-8.113 19.573-11.748 31.877-12.496m-32.157 47.26c1.138 8.394 3.856 16.2 9.135 22.899 7.64 9.694 17.627 13.962 29.913 11.865 11.37-1.942 18.275-9.386 21.656-19.83 4.354-13.45 3.916-27.016-2.42-39.825-2.152-4.353-5.364-8.56-9.055-11.7-9.364-7.968-20.441-9.583-31.866-5.453-11.069 4.001-15.88 13.257-17.243 24.29-.686 5.55-.173 11.249-.12 17.754zM912.042 769.985a3350.573 3350.573 0 00-6.411-7.416c-.287 2.116-.584 3.295-.586 4.474-.028 16.82-.077 33.642.011 50.463.048 9.058 1.899 11.57 9.935 14.94H891.12c11.143-2.151 10.4-10.804 10.413-18.995.026-16.322.01-32.643.007-48.965-.001-7.775-1.069-9.255-8.512-11.904-.876-.312-1.728-.69-2.476-2.042 6.255 0 12.521-.201 18.756.154 1.41.08 2.927 1.915 4.03 3.245 16.27 19.606 32.475 39.267 48.717 58.898.572.69 1.37 1.194 2.623 2.262.15-2.156.334-3.582.335-5.008.016-14.822.064-29.645-.028-44.467-.054-8.797-1.81-11.175-9.704-14.582h23.472c-11.164 2.465-10.272 11.286-10.285 19.579-.028 19.32-.009 38.638-.01 57.958v5.857l-1.429.687a541726.37 541726.37 0 01-54.987-65.138z"
      />
      <path
        fill="#FBFAFA"
        opacity={1}
        d="M749.934 644.006c.295 12.307-.38 24.24 1.117 35.894 2.096 16.311 15.431 24.53 31.384 20.808 9.912-2.314 16.943-10.392 17.372-21.796.557-14.807.352-29.652.115-44.474-.107-6.657-2.48-8.775-12.378-12.483h26.507c-10.034 2.35-10.202 10.047-10.152 18.002.074 11.996.222 24-.098 35.987-.39 14.601-8.382 24.936-21.451 28.535-14.986 4.126-31.466-.772-38.049-12.54-2.952-5.276-4.453-11.877-4.815-17.984-.727-12.287.013-24.652-.296-36.974-.27-10.755 2.693-11.55-10.112-15.106h31.098c-.31.544-.413.968-.59 1.002-9.374 1.765-9.62 2.053-9.65 11.633-.008 3-.001 5.998-.002 9.496zM854.928 809.901c2.002 4.07 3.765 7.84 5.717 11.511 2.527 4.75 5.335 9.28 11.182 11.078H842.24c.167-.382.245-.876.42-.912 8.573-1.801 9.183-3.042 5.263-11.257-4.084-8.56-8.324-17.048-12.302-25.657-1.273-2.756-2.841-4.09-6.026-3.952-5.485.237-11.009-.21-16.47.224-1.812.144-4.29 1.714-5.073 3.314-3.439 7.015-6.497 14.227-9.45 21.467-3.978 9.754-1.497 14 8.75 15.506.632.093 1.24.342 1.812 1.232h-29.936c10.755-2.156 13.21-11.5 16.82-19.658 8.686-19.628 17.151-39.354 25.716-59.036.647-1.485 1.383-2.932 2.822-5.967 10.47 21.421 20.33 41.593 30.343 62.107m-31.853-41.379l-2.487-4.046-9.84 22.785h21.212l-8.885-18.739zM1130.373 782.216c4.922-11.26 9.674-22.18 14.966-34.342 1.6 2.93 2.592 4.581 3.431 6.306 10.198 20.946 20.3 41.94 30.598 62.835 3.048 6.185 5.628 13.011 13.47 15.492h-29.63c.206-.433.296-.92.476-.957 8.495-1.71 9.152-2.937 5.421-10.805-4.136-8.72-8.459-17.352-12.502-26.115-1.28-2.774-2.883-4.046-6.046-3.917-5.652.232-11.338-.18-16.97.231-1.634.12-3.83 1.792-4.57 3.33-3.387 7.042-6.48 14.235-9.43 21.476-3.97 9.746-1.5 13.936 8.8 15.478.623.094 1.221.353 1.789 1.244h-29.943c10.362-2.01 12.902-10.928 16.457-18.78 4.666-10.306 9.024-20.752 13.683-31.476m13.066 5.47h9.787l-11.404-23.755-10.257 23.755h11.874zM595.353 750.837c11.034 22.59 21.857 44.9 32.764 67.17 2.905 5.932 5.69 12.081 12.877 14.585h-29.327c.279-.508.379-.954.567-.995 8.024-1.76 8.76-3.172 5.207-10.651-4.212-8.87-8.6-17.656-12.744-26.557-1.214-2.609-2.784-3.767-5.723-3.664-5.489.19-10.993.192-16.482.002-2.98-.103-4.479 1.113-5.57 3.793-2.885 7.088-6.112 14.037-9.027 21.113-4.118 9.996-1.669 14.102 9.068 15.604.595.084 1.163.364 1.686 1.279h-30.717c.602-.527.993-1.172 1.429-1.204 5.955-.441 9.268-4.39 11.505-9.2 5.259-11.314 10.25-22.753 15.27-34.177 5.154-11.73 10.171-23.522 15.377-35.23.573-1.287.597-4.63 3.84-1.868m-13.665 36.71h19.733l-10.72-22.366-1.649.078c-2.684 7.331-5.369 14.662-7.364 22.289z"
      />
      <path
        fill="#FCFBFB"
        opacity={1}
        d="M675.485 698.024c3.72 2.187 7.297 3.97 10.521 5.576h-33.69l-.156-.706c1.122-.235 2.234-.584 3.368-.687 7.252-.657 8.507-1.93 8.543-9.342.06-12.499.026-24.998.024-37.497-.002-7.999-.105-16 .005-23.997.062-4.541-2.013-6.603-6.472-7.083-11.752-1.265-18.655 3.063-22.476 14.387-.496 1.472-1.045 2.927-2.658 4.13l1.74-23.383c3.246.684 6.34 1.874 9.445 1.9 17.825.153 35.654.125 53.478-.097 2.922-.036 5.827-1.34 9.183-2.167l-1.143 23.486-1.241.14c-.387-1.82-.728-3.65-1.17-5.456-2.623-10.73-14.265-16.633-24.368-12.05-1.553.704-3.208 3.264-3.218 4.974-.12 22.488.046 44.978.285 67.872zM593.716 662.332c6.4 4.281 11.569 9.11 12.998 16.747 2.01 10.747-4.386 21.03-15.626 24.696-9.377 3.057-18.675 2.32-27.831-1.319-3.197-1.27-4.638-3.272-4.73-6.738-.144-5.395-.658-10.78.04-16.35 2.049 4.073 3.925 8.245 6.19 12.194 2.97 5.177 6.895 9.319 13.033 10.868 12.68 3.202 21.65-5.443 18.764-18.184-1.404-6.2-5.217-10.719-10.254-14.253-5.72-4.012-12.008-7.333-17.226-11.896-3.711-3.246-7.22-7.656-8.773-12.24-3.208-9.47 1.725-18.725 11.057-22.931 8.96-4.039 18.098-3.591 27.305-.76 3.17.975 4.574 2.805 4.409 6.207-.215 4.427-.053 8.873-.611 13.624-.672-1.668-1.297-3.356-2.025-4.998-3.045-6.866-6.565-13.263-15.104-14.33-5.394-.674-10.454.014-13.869 4.774-3.627 5.056-3.881 10.802-.976 16.053 1.862 3.366 4.865 6.348 7.951 8.73 4.727 3.649 9.967 6.631 15.278 10.106zM951.983 681.99v-45.437c0-11.344-.002-11.344-10.378-14.617h32.178c-10.944 3.85-10.947 3.85-10.948 15.2-.002 18.143-.014 36.285.009 54.427.01 9.022.141 9.134 9.019 10.83.384.073.7.496 1.723 1.259h-31.754l-.184-.691c1.096-.27 2.19-.76 3.288-.771 5.178-.05 7-3.044 7.021-7.718.018-3.995.018-7.99.026-12.482z"
      />
      <path
        fill="#F8F5F6"
        opacity={1}
        d="M610.042 889.146c5.617-6.386 12.882-8.118 19.418-4.894 5.815 2.868 9.544 9.537 7.248 15.834-1.624 4.459-5.508 8.094-8.72 12.564 2.298 2.917 5.899.97 9.534-.454-1.362 4.184-5.458 5.546-9.88 3.486-4.29-1.997-8.56-4.059-12.718-6.314-6.993-3.793-8.92-11.611-4.882-20.222m23.997 9.073c-.19-8.342-4.887-13.073-12.469-12.56-6.88.465-11.36 5.952-10.573 12.95.593 5.271 4.804 9.239 10.307 9.712 6.463.555 10.531-2.426 12.735-10.102zM932.87 897v13.674l-2.047.977-16.993-21.121-1.61.342v21.131c-3.433-3.503-4.08-22.701-1.579-30.264l16.955 20.88 2.005-.504v-18.996l2.625-.095c1.316 4.335.326 9.002.643 13.976z"
      />
      <path
        fill="#F6F2F2"
        opacity={1}
        d="M601.11 906.889a178.154 178.154 0 011.904 3.252l-.795.976c-1.188-.918-2.53-1.694-3.526-2.787-1.562-1.713-2.579-4.057-4.378-5.392-3.887-2.884-9.05-.14-9.639 4.781-.134 1.126-.629 2.208-.958 3.31l-1.518-.161v-27.664c4.152 0 8.593-.332 12.96.1 3.84.379 6.935 2.469 7.947 6.564 1 4.047.193 7.598-3.278 10.268-.632.486-1.196 1.06-2.03 1.81 1.105 1.652 2.106 3.148 3.31 4.943m-8.91-21.098c-2.352.397-6.511.354-6.734 1.269-.833 3.423-.963 7.316-.068 10.69.289 1.09 4.537 1.527 6.983 1.56 4.167.056 7.626-1.39 7.814-6.38.182-4.844-2.687-6.785-7.995-7.14zM991.393 907.466c-.01-6.933.165-13.429-.08-19.908-.146-3.843 1.397-5.07 4.987-4.647 1.641.194 3.324.032 4.988.037 4.902.015 9.566.88 11.525 6.057 1.973 5.213.074 9.438-5.095 12.679l5.457 8.518-1.42 1.19c-1.38-1.502-2.716-3.048-4.153-4.494-1.58-1.592-3.01-3.903-4.931-4.476-5.316-1.584-7.188.029-8.021 5.571-.15.99-.916 1.886-1.397 2.826-.617-.97-1.234-1.94-1.86-3.353m18.672-16.603c-2.213-4.476-7.615-6.677-13.032-4.924-4.134 1.337-1.95 5.06-2.199 7.696-.164 1.741.286 4.474 1.46 5.249 5.285 3.489 13.388-.897 13.771-8.02z"
      />
      <path
        fill="#F8F5F6"
        opacity={1}
        d="M1059.4 898.56c-1.009 6.662-4.621 10.767-10.69 12.214-5.866 1.399-11.37.197-15.411-4.64-3.743-4.479-4.292-9.662-2.049-15.007 2.572-6.128 9.399-9.382 16.619-8.128 7.103 1.235 11.27 6.69 11.531 15.561m-7.116 7.386c.925-1.156 2.05-2.206 2.74-3.488 2.592-4.808 1.281-11.179-2.835-14.45-4.012-3.19-10.817-3.18-14.847.023-4.294 3.414-5.537 9.44-2.97 14.397 3.084 5.955 10.058 7.57 17.912 3.518z"
      />
      <path
        fill="#FBFAFA"
        opacity={1}
        d="M810.229 909.707c-3.38-5.931-7.345-9.88-14.74-6.736l-1.142 8.024-1.605-.165v-27.657c4.01 0 8.292-.294 12.513.085 4.075.365 7.301 2.534 8.367 6.761 1.073 4.258-.026 7.904-3.876 10.441-.518.342-.962.797-1.65 1.376l6.507 9.548c-2.169-.733-3.168-1.072-4.374-1.677m-14.937-22.828v12.925c3.711-.244 6.987-.234 10.186-.728 3.587-.553 5.511-2.97 5.437-6.612-.08-3.912-2.333-6.201-6.148-6.495-2.935-.226-5.913.114-9.475.91zM1084.284 909.765c-3.428-5.856-7.286-10.038-14.798-6.754l-1.116 7.94-1.611-.125v-27.84c2.99 0 6.258-.032 9.525.008 4.973.06 9.44 1.283 11.173 6.584 1.69 5.174-.363 9.095-5.356 11.981l6.193 9.672c-1.905-.6-2.845-.896-4.01-1.466m-13.515-23.902l-2.565 14.09c5.077-.408 8.812.074 11.788-1.207 2.169-.934 4.219-4.009 4.732-6.462.675-3.231-1.771-5.64-5.113-6.182-2.591-.42-5.278-.257-8.842-.239z"
      />
      <path
        fill="#F6F2F2"
        opacity={1}
        d="M971.244 908.197c4.708.147 8.943.276 13.179.405l-.075 1.859h-19.262v-27.195h18.503l.392.925c-.773.503-1.519 1.384-2.323 1.441-2.82.2-5.682.353-8.486.086-4.231-.403-5.566 1.33-5.318 5.427.174 2.884.926 4.369 4.03 4.202 2.49-.134 5.002-.099 7.493.05.944.056 1.857.64 2.784.984l-.139 1.357-13.933.618c1.005 3.537-2.961 7.739 3.155 9.841zM720.988 885.77c-3.51.265-7.44-1.313-7.356 4.393.056 3.83 1.141 5.548 5.147 5.215 2.974-.248 5.985-.05 8.98-.05.01.916.018 1.83.026 2.746-3.242 0-6.5.2-9.723-.052-3.75-.293-4.474 1.584-4.386 4.786.085 3.042-.017 5.765 4.314 5.452 2.981-.214 5.994-.106 8.987.016 1.104.045 2.19.544 3.283.835l-.16 1.343h-19.277V883.5h18.674l.102 1.795c-2.713.159-5.425.317-8.611.476zM840.847 902.01c1.306 3.014 2.46 5.684 3.615 8.354l-1.025 1.159c-3.758-3.774-6.17-8.327-13.055-8.331-6.884-.005-8.965 4.695-12.603 8.362l-1.187-1.17c2.89-6.414 5.662-12.886 8.728-19.215 1.383-2.856 3.354-5.428 5.058-8.129 1.849 2.734 3.911 5.351 5.49 8.234 1.831 3.342 3.238 6.918 4.98 10.736m-14.235-6.914l-2.22 5.556h12.589l-6.405-14.296c-1.612 3.555-2.634 5.81-3.964 8.74zM575.282 907.35c.426 1.226.712 2.127.998 3.029l-.735.966c-4.019-2.874-5.572-8.632-12.61-8.105-6.438.481-9.863 3.114-12.674 8.444l-.899-.954c.063-.867-.109-1.839.225-2.584 3.4-7.6 6.83-15.186 10.405-22.704.478-1.005 1.86-2.29 2.716-2.215.953.082 2.112 1.416 2.615 2.474 3.357 7.068 6.564 14.207 9.959 21.648m-9.45-6.347c.729-.814 2.24-1.922 2.062-2.395-1.435-3.807-3.187-7.495-5.336-12.332l-6.517 14.734c3.69 0 6.33 0 9.791-.007z"
      />
      <path
        fill="#F8F5F6"
        opacity={1}
        d="M1120.194 888.048c4.623-6.495 14.417-7.246 18.133-1.227-3.01-.48-5.68-1.202-8.362-1.253-3.023-.058-6.351.362-6.846 4.255-.478 3.763 2.63 4.486 5.374 5.339 2.533.786 5.167 1.376 7.543 2.504 3.71 1.761 5.49 5.3 3.115 8.554-1.768 2.421-5.391 4.2-8.467 4.777-4.045.76-8.382.106-10.76-4.737.97.222 1.935.474 2.912.661 2.737.526 5.605 1.751 8.18 1.307 2.122-.366 3.9-2.723 5.83-4.197-1.618-1.626-3.017-3.613-4.92-4.773-1.775-1.082-4.106-1.225-6.157-1.89-4.355-1.413-6.757-4.117-5.575-9.32zM650.647 910.496c-1.784-1.241-3.767-2.032-4.565-3.477-4.256-7.708-1.753-15.824-2.174-23.776l2.027-.292c.327 1.207.9 2.406.936 3.62.13 4.325-.036 8.66.12 12.984.212 5.837 2.863 8.636 8.017 8.783 5.454.155 8.386-2.552 8.796-8.577.271-3.978.063-7.988.148-11.982.033-1.524.285-3.045.545-5.638 1.32 1.403 2.226 1.918 2.224 2.43-.031 6.14.43 12.376-.491 18.395-1.056 6.902-6.264 9.136-15.583 7.53zM1094.978 895.016V883.4h18.94l.305 1.042c-.843.427-1.667 1.167-2.535 1.222-2.647.168-5.341.328-7.963.024-4.675-.54-6.134 1.38-5.77 5.898.224 2.777 1.135 3.872 3.865 3.789 3.47-.106 6.945-.026 10.417-.026l.02 2.183h-13.332c-.411 1.682-.787 2.59-.836 3.516-.38 7.192-.361 7.196 6.75 7.207 3.273.006 6.548.001 9.822.001l.004 2.135h-19.687v-15.375zM870.945 911.044h-10.631v-27.676h18.578l.352.966c-.811.46-1.6 1.26-2.439 1.318-2.646.18-5.312.076-7.97.094-5.928.039-6.133.415-5.84 6.219.136 2.687 1.344 3.379 3.71 3.41 3.295.045 6.588.27 9.879.472.205.012.382.487 1.337 1.789l-14.365.714c-.188.85-.416 1.466-.448 2.091-.393 7.81-.385 7.81 7.62 7.815 2.975.002 5.95 0 8.924 0l.02 2.788h-8.727z"
      />
      <path
        fill="#FBFAFA"
        opacity={1}
        d="M777.95 905.919c.89-5.838 1.513-11.36 2.125-16.882.218-1.967.407-3.938 1.813-5.983.372.755 1.055 1.506 1.066 2.267.076 5.315.274 10.65-.074 15.944-.4 6.094-4.396 9.62-10.444 9.883-6.85.298-11.4-2.794-12.077-9.144-.596-5.59-.288-11.28-.243-16.924.006-.693.858-1.38 2.444-1.911.156 2.164.39 4.327.449 6.494.082 2.99-.059 5.985.057 8.972.356 9.193 6.713 12.478 14.883 7.284z"
      />
      <path
        fill="#F6F2F2"
        opacity={1}
        d="M745.501 910.083c-3.516 1.464-2.774-1.177-2.808-2.705-.116-5.314-.279-10.645.014-15.945.24-4.34-1.28-6.166-5.685-5.728-1.324.131-2.725-.52-4.091-.813l.215-1.427h22.05l.275 1.247c-1.334.352-2.723 1.14-3.992.979-4.919-.625-5.83 1.826-5.663 6.09.234 5.965-.06 11.95-.315 18.302zM950.936 882.943h8.71c.095.57.19 1.14.287 1.711-1.464.373-2.96 1.154-4.385 1.041-4.31-.343-5.48 1.68-5.296 5.627.233 4.978.088 9.976.032 14.965-.017 1.54-.274 3.08-.421 4.619l-1.582.179c-.4-1.31-1.113-2.612-1.145-3.93-.132-5.486-.227-10.983-.004-16.462.145-3.562-.858-5.328-4.727-4.981-1.601.143-3.265-.41-4.9-.647l.048-2.122h13.383zM684.92 883.065c7.218-.068 14.035-.068 20.851-.068l.116 2.007c-1.753.26-3.514.773-5.259.727-3.27-.088-4.426 1.368-4.348 4.52.131 5.327.06 10.66.005 15.99-.016 1.546-.265 3.09-.408 4.636l-1.563.216c-.41-1.302-1.14-2.595-1.176-3.908-.14-5.16-.31-10.34.012-15.484.277-4.421-.965-6.475-5.754-6.015-3.005.288-3.04-.074-2.476-2.62zM1023.722 900.938v11.208c-3.894-3.791-4.342-24.46-1.48-29.878 2.725 6.386.894 12.423 1.48 18.67z"
      />
      <path
        fill="#F8F5F6"
        opacity={1}
        d="M900.343 902.855a932.734 932.734 0 01-.462 8.6c-3.518-3.159-3.709-25.007.463-28.348v19.748z"
      />
      <path
        fill="#F6F2F2"
        opacity={1}
        d="M678.722 898.976v11.907c-3.919-2.607-4.322-23.323-1.415-28.655 2.54 5.755.907 11.14 1.415 16.748z"
      />
      <path
        fill="#B6939A"
        opacity={1}
        d="M356.541 609.318c10.634-2.157 20.885-4.232 31.157-6.2 3.618-.693 5.017.887 4.99 4.656-.133 18.997-.057 37.996-.076 56.994-.001.99.15 2.603-.347 2.877-7.555 4.159-7.486 14.232-16.633 18.34-16.216 7.284-26.36 21.483-32.471 38.245-2.266 6.214-.953 8.411 5.49 8.898 9.3.703 18.629 1.053 27.91 1.923 2.17.203 4.694 1.411 6.211 2.975 6.584 6.786 16.399 6.803 23.15.086 1.65-1.643 4.361-2.837 6.699-3.064 9.111-.884 18.274-1.226 27.408-1.91 6.083-.455 7.628-2.757 5.57-8.544-6.553-18.417-18.568-32.167-35.978-41.037-3.836-1.955-6.718-4.016-6.988-8.763-.082-1.437-1.34-3.663-2.525-4.03-4.984-1.547-4.04-5.394-4.044-8.935-.015-17.498-.007-34.997-.007-52.495v-6.598c6.129.528 11.885.603 17.488 1.571 50.16 8.667 87.006 44.579 96.827 94.646 1.463 7.458 1.762 15.237 1.78 22.87.138 60.327.03 120.655.174 180.982.011 4.66-1.03 6.29-6.017 6.253-30.662-.23-61.327-.198-91.99-.032-4.967.027-7.039-1.49-7.682-6.637-2.518-20.162-5.493-40.267-8.277-60.396-.111-.805-.014-1.638-.014-3.23 12.436.627 25.627-3.684 34.987 9.387 10.084 14.082 20.763 27.737 31.064 41.665.902 1.218.704 3.2 1.435 4.611.621 1.2 1.69 2.429 2.87 2.965.589.267 2.472-.82 2.689-1.597.297-1.068-.07-2.697-.772-3.61-10.62-13.832-21.292-27.625-32.079-41.327-2.567-3.26-5.157-6.828-8.53-9.049-4.628-3.046-10.014-4.943-15.864-6.453 1.02-.393 2.016-.864 3.061-1.166 13.591-3.934 23.219-12.539 27.924-25.722 3.1-8.686 5.317-17.84 6.606-26.97 1.04-7.366-2.638-10.858-9.421-12.477 1.25 2.528 4.137 5.685 3.91 8.6-.268 3.458-2.757 7.078-5.086 9.983-8.819 10.998-19.315 20.2-31.2 27.817-17.065 10.935-35.736 11.64-54.93 8.495-3.018-.495-5.829-2.244-8.736-3.413-2.536 5.603-.68 10.336 4.75 14.044-2.024 3.633-4.777 6.905-5.76 10.643-3.347 12.72-5.974 25.626-9.096 38.408-.801 3.279-2.61 6.302-3.558 9.558-.407 1.397-.054 3.188.49 4.592.183.475 2.572.801 2.98.338.846-.96 1.275-2.465 1.45-3.801.275-2.09-.133-4.3.32-6.332 3.186-14.305 6.632-28.554 9.745-42.875 1.069-4.918 3.556-6.961 8.626-6.874 12.288.21 24.581.068 36.792.068 0 14.148.03 27.403-.059 40.656-.007 1.055-1.187 2.095-1.212 3.157-.036 1.526.247 3.184.913 4.529.21.422 2.702.438 3.08-.104.745-1.072 1.06-2.677 1.001-4.038-.477-11.037-1.083-22.069-1.649-33.102l1.865-.144c.842 5.838 1.728 11.67 2.516 17.516 1.668 12.38 3.24 24.774 4.953 37.149.45 3.257-.197 5.085-3.991 5.077-40.163-.08-80.325-.084-120.487-.12-.32 0-.642-.155-1.591-.399-.092-1.553-.285-3.306-.285-5.058-.031-62.994-.894-126.004.249-188.977.724-39.908 20.127-70.817 53.362-92.681 7.578-4.986 16.295-8.24 24.863-12.414m6.367 213.506c1.665.06 3.339.023 4.992.194 7.333.757 13.307-1.05 18.89-6.564 8.103-8.003 18.46-12.712 29.784-14.123 14.295-1.781 19.944-13.116 26.865-23.067 1.866-2.682.812-6.017-2.629-6.725-7.09-1.46-14.65-4.22-21.418-3.032-29.094 5.102-52.595 19.954-70.325 43.777-2.275 3.057-1.536 5.05 1.478 6.189 3.701 1.4 7.63 2.196 12.363 3.35z"
      />
      <path
        fill="#B6939A"
        opacity={1}
        d="M370.813 692.755c3.407-2.119 6.393-4.31 9.682-5.857 4.794-2.255 8.389-5.045 9.208-10.808.187-1.31 3.058-3.215 4.565-3.104 1.727.127 4.457 1.971 4.749 3.461 1.018 5.2 4.119 7.974 8.587 10.17 16.094 7.906 27.242 20.433 33.838 37.056.6 1.51 1.018 3.092 1.508 4.602-9.89 4.344-84.575 4.257-97.181.171 4.238-14.699 12.688-26.303 25.044-35.691z"
      />
      <path
        fill="#B8969D"
        opacity={1}
        d="M386.83 735.216c5.264-.102 10.206-.102 15.403-.102-3.987 6.057-12.136 5.956-15.404.102z"
      />
      <path
        fill="#B6939A"
        opacity={1}
        d="M863.593 623.968c22.466-1.597 36.552 9.937 39.253 32.077 1.095 8.97.905 17.924-2.678 26.506-5.988 14.344-21.583 22.427-36.752 19.094-4.8-1.054-7.298-3.96-7.32-8.697-.09-20.457-.08-40.915-.008-61.372.016-4.52 2.641-6.972 7.505-7.608zM1058.538 821.52c-8.3 8.398-18.306 10.428-29.198 9.28-5.864-.619-8.356-3.3-8.392-9.178-.124-20.14-.113-40.28-.03-60.42.023-5.5 2.274-7.646 7.88-8.278 21.565-2.432 36.657 10.418 39.007 33.658 1.27 12.559-.074 24.664-9.267 34.938zM1011.899 666.854c-.012-6.068-.525-11.767.161-17.317 1.364-11.033 6.174-20.289 17.243-24.29 11.425-4.13 22.502-2.515 31.866 5.453 3.691 3.14 6.903 7.347 9.056 11.7 6.335 12.809 6.773 26.376 2.419 39.824-3.381 10.445-10.286 17.89-21.656 19.83-12.286 2.098-22.273-2.17-29.913-11.864-5.28-6.698-7.997-14.505-9.176-23.336z"
      />
      <path
        fill="#B8969D"
        opacity={1}
        d="M823.232 768.853l8.728 18.408h-21.211l9.839-22.785c1.17 1.905 1.829 2.976 2.644 4.377zM1142.964 787.686h-11.399l10.257-23.755 11.404 23.755h-10.262zM581.344 787.4c2.34-7.479 5.024-14.81 7.708-22.14l1.65-.079 10.719 22.367c-7.259 0-13.496 0-20.077-.148zM634.005 898.63c-2.17 7.265-6.238 10.246-12.701 9.691-5.503-.473-9.714-4.441-10.307-9.712-.787-6.998 3.693-12.485 10.573-12.95 7.582-.513 12.278 4.218 12.435 12.97zM592.642 885.814c4.865.33 7.734 2.272 7.552 7.116-.188 4.99-3.647 6.436-7.814 6.38-2.446-.033-6.694-.47-6.983-1.56-.895-3.374-.765-7.267.068-10.69.223-.915 4.382-.872 7.177-1.246zM1010.123 891.274c-.44 6.713-8.544 11.099-13.83 7.61-1.173-.775-1.623-3.508-1.459-5.25.25-2.636-1.935-6.358 2.199-7.695 5.417-1.753 10.82.448 13.09 5.335zM1051.967 906.187c-7.537 3.81-14.51 2.196-17.595-3.76-2.567-4.956-1.324-10.982 2.97-14.396 4.03-3.203 10.835-3.214 14.847-.024 4.116 3.272 5.427 9.643 2.836 14.45-.692 1.283-1.816 2.333-3.058 3.73zM795.594 886.525c3.26-.442 6.238-.782 9.173-.556 3.815.294 6.068 2.583 6.148 6.495.074 3.642-1.85 6.059-5.437 6.612-3.199.494-6.475.484-10.186.728 0-4.787 0-8.856.302-13.28zM1071.23 885.806c3.103.039 5.79-.124 8.381.296 3.342.542 5.788 2.95 5.113 6.182-.513 2.453-2.563 5.528-4.732 6.462-2.976 1.281-6.71.799-11.788 1.206.974-5.352 1.77-9.72 3.025-14.146zM826.766 894.758c1.177-2.592 2.199-4.847 3.811-8.402l6.405 14.296h-12.59c.809-2.023 1.515-3.79 2.374-5.894zM565.42 901.005c-3.05.004-5.688.004-9.38.004l6.518-14.734c2.15 4.837 3.901 8.525 5.336 12.332.178.473-1.333 1.581-2.473 2.398z"
      />
      <path
        fill="#FEFEFE"
        opacity={1}
        d="M362.457 822.775c-4.281-1.106-8.21-1.903-11.912-3.302-3.014-1.14-3.753-3.132-1.478-6.19 17.73-23.822 41.231-38.674 70.325-43.776 6.769-1.187 14.329 1.572 21.418 3.032 3.44.708 4.495 4.043 2.629 6.725-6.921 9.951-12.57 21.286-26.865 23.067-11.323 1.41-21.681 6.12-29.784 14.123-5.583 5.514-11.557 7.321-18.89 6.564-1.653-.17-3.327-.135-5.443-.243z"
      />
    </svg>
  );
}
