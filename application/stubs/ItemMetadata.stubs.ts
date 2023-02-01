import { ItemType } from '@vidispine/types'

export const getFakeItemMetadata = () => {
  const item: ItemType = {
    base: '',
    metadata: {
      revision: 'VX-206,VX-207,VX-210,VX-212,VX-211',
      timespan: [
        {
          base: '',
          field: [
            {
              name: 'durationSeconds',
              value: [
                {
                  value: '6.006',
                  uuid: '948f5ec8-9ff4-4c31-9455-a9ee6d5b35d3',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: '00c7a3f7-ed90-4b9c-ae85-e492311f0bc2',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'mimeType',
              value: [
                {
                  value: 'video/quicktime',
                  uuid: 'f27d5649-6dbd-4d0a-8579-5548944c0acf',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: '8c91089d-045b-46cd-907d-cf2c51863510',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'title',
              value: [
                {
                  value: 'Test 3',
                  uuid: '5914ff91-507f-4d1d-86de-3ace3be4e889',
                  user: 'admin',
                  timestamp: new Date('2022-07-04T23:10:49.371+0000'),
                  change: 'VX-206',
                },
              ],
              uuid: 'ddb8bcc3-83ab-476b-974c-e887e3e8df40',
              user: 'admin',
              timestamp: new Date('2022-07-04T23:10:49.371+0000'),
              change: 'VX-206',
            },
            {
              name: 'created',
              value: [
                {
                  value: '2022-07-04T23:10:49.350Z',
                  uuid: '195c04ae-c382-48d6-8cf8-d997c8de380a',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:10:49.449+0000'),
                  change: 'VX-207',
                },
              ],
              uuid: 'cd977102-d1d2-4db5-84de-d236bcd47795',
              user: 'system',
              timestamp: new Date('2022-07-04T23:10:49.449+0000'),
              change: 'VX-207',
            },
            {
              name: 'user',
              value: [
                {
                  value: 'admin',
                },
              ],
            },
          ],
          group: [],
          start: '-INF',
          end: '+INF',
        },
        {
          base: '',
          field: [
            {
              name: 'created',
              value: [
                {
                  value: '2022-07-04T22:57:55.962Z',
                  uuid: '57677559-a0ba-4b92-8aa5-9e4a18ff15f6',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '1edb0267-4899-4f3d-a554-c44da32a4987',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'durationSeconds',
              value: [
                {
                  value: '102.101333',
                  uuid: 'e6a67062-760e-446b-9084-8edd35867c32',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '2cb515a5-efc5-467c-b4f3-79d0e79993e6',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'mimeType',
              value: [
                {
                  value: 'video/mp4',
                  uuid: 'ac5a9eab-3f92-43f2-a9a0-8f9df34ecf2f',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '65cb73af-b593-4ffe-9c62-6d3a84266f2c',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'originalFilename',
              value: [
                {
                  value: 'AJA-MM-TEST-111122-FINAL.mp4',
                  uuid: '5b03ff7e-6244-4fb1-9c87-27606d3b102a',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '31afb3e5-9c5a-4f70-8499-4b091fe56387',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
          ],
          group: [],
          start: '0@PAL',
          end: '115@PAL',
        },
      ],
    },
    files: {
      uri: ['http://localhost:6006/sample.mov'],
    },
    shape: [
      {
        id: 'VX-49',
        created: new Date('2022-07-04T23:10:49.556+0000'),
        essenceVersion: 0,
        tag: ['original'],
        mimeType: ['video/quicktime'],
        containerComponent: {
          duration: {
            samples: 6006000,
            timeBase: {
              numerator: 1,
              denominator: 1000000,
            },
          },
          format: 'mov,mp4,m4a,3gp,3g2,mj2',
          firstSMPTETimecode: '00:00:01;12',
          startTimecode: 42,
          startTimestamp: {
            samples: 0,
            timeBase: {
              numerator: 1,
              denominator: 30000,
            },
          },
          roundedTimeBase: 30,
          dropFrame: true,
          timeCodeTimeBase: {
            numerator: 1001,
            denominator: 30000,
          },
          file: [
            {
              id: 'VX-55',
              path: 'VX-55.mov',
              uri: ['http://localhost:6006/sample.mov'],
              state: 'CLOSED',
              size: 8198531,
              hash: '8b18500ec652b56d70851eaff934b328876799cc',
              timestamp: new Date('2022-07-04T23:24:54.858+0000'),
              refreshFlag: 1,
              storage: 'VX-1',
              metadata: {},
            },
          ],
          id: 'VX-122',
          metadata: [
            {
              key: 'creation_time',
              value: '2022-07-04T23:24:06.000000Z',
            },
            {
              key: 'componentOriginalFilename',
              value: 'VX-55.mov',
            },
            {
              key: 'drop_frame',
              value: 'true',
            },
            {
              key: 'major_brand',
              value: 'qt  ',
            },
            {
              key: 'rounded_time_base',
              value: '30',
            },
            {
              key: 'encoder',
              value: 'Lavf58.76.100',
            },
            {
              key: 'start_timecode',
              value: '42',
            },
            {
              key: 'compatible_brands',
              value: 'qt  ',
            },
            {
              key: 'minor_version',
              value: '512',
            },
          ],
        },
        audioComponent: [
          {
            channelCount: 2,
            channelLayout: 3,
            sampleFormat: 'AV_SAMPLE_FMT_FLTP',
            frameSize: 1024,
            file: [
              {
                id: 'VX-55',
                path: 'VX-55.mov',
                uri: ['http://localhost:6006/sample.mov'],
                state: 'CLOSED',
                size: 8198531,
                hash: '8b18500ec652b56d70851eaff934b328876799cc',
                timestamp: new Date('2022-07-04T23:24:54.858+0000'),
                refreshFlag: 1,
                storage: 'VX-1',
                metadata: {},
              },
            ],
            id: 'VX-123',
            metadata: [
              {
                key: 'creation_time',
                value: '2022-07-04T23:24:06.000000Z',
              },
              {
                key: 'componentOriginalFilename',
                value: 'VX-55.mov',
              },
              {
                key: 'handler_name',
                value: 'SoundHandler',
              },
              {
                key: 'vendor_id',
                value: '[0][0][0][0]',
              },
            ],
            codec: 'aac',
            timeBase: {
              numerator: 1,
              denominator: 48000,
            },
            itemTrack: 'A1',
            essenceStreamId: 1,
            bitrate: 317375,
            numberOfPackets: 216,
            extradata: '1190',
            pid: 2,
            duration: {
              samples: 221184,
              timeBase: {
                numerator: 1,
                denominator: 48000,
              },
            },
            profile: 1,
            edl: {
              timeScale: {
                numerator: 1,
                denominator: 1000,
              },
              entry: [
                {
                  start: 0,
                  length: 4608,
                  mediaRate: 65536,
                },
              ],
            },
            startTimestamp: {
              samples: 0,
              timeBase: {
                numerator: 1,
                denominator: 48000,
              },
            },
          },
        ],
        videoComponent: [
          {
            resolution: {
              width: 1920,
              height: 1080,
            },
            pixelFormat: 'yuv420p',
            maxBFrames: 1,
            pixelAspectRatio: {
              horizontal: 1,
              vertical: 1,
            },
            fieldOrder: 'progressive',
            codecTimeBase: {
              numerator: 1001,
              denominator: 60000,
            },
            averageFrameRate: {
              numerator: 30000,
              denominator: 1001,
            },
            realBaseFrameRate: {
              numerator: 30000,
              denominator: 1001,
            },
            displayWidth: {
              numerator: 1920,
              denominator: 1,
            },
            displayHeight: {
              numerator: 1080,
              denominator: 1,
            },
            containerSAR: {
              horizontal: 1,
              vertical: 1,
            },
            colr_primaries: 1,
            colr_transfer_function: 1,
            colr_matrix: 1,
            ticks_per_frame: 2,
            bitDepth: 8,
            bitsPerPixel: 12,
            colorPrimaries: 'BT709',
            file: [
              {
                id: 'VX-55',
                path: 'VX-55.mov',
                uri: ['http://localhost:6006/sample.mov'],
                state: 'CLOSED',
                size: 8198531,
                hash: '8b18500ec652b56d70851eaff934b328876799cc',
                timestamp: new Date('2022-07-04T23:24:54.858+0000'),
                refreshFlag: 1,
                storage: 'VX-1',
                metadata: {},
              },
            ],
            id: 'VX-124',
            metadata: [
              {
                key: 'creation_time',
                value: '2022-07-04T23:24:06.000000Z',
              },
              {
                key: 'componentOriginalFilename',
                value: 'VX-55.mov',
              },
              {
                key: 'handler_name',
                value: 'VideoHandler',
              },
              {
                key: 'vendor_id',
                value: 'FFMP',
              },
              {
                key: 'timecode',
                value: '00:00:01;12',
              },
            ],
            codec: 'h264',
            timeBase: {
              numerator: 1,
              denominator: 30000,
            },
            itemTrack: 'V1',
            essenceStreamId: 0,
            bitrate: 10410023,
            numberOfPackets: 180,
            extradata:
              '014D0029FFE1001C274D0029898B603C0113F2E02D4040404C0C0017700005DC17BDF05001000428EE1F20',
            pid: 1,
            duration: {
              samples: 180180,
              timeBase: {
                numerator: 1,
                denominator: 30000,
              },
            },
            profile: 77,
            level: 41,
            edl: {
              timeScale: {
                numerator: 1,
                denominator: 1000,
              },
              entry: [
                {
                  start: 1001,
                  length: 6006,
                  mediaRate: 65536,
                },
              ],
            },
            startTimestamp: {
              samples: 0,
              timeBase: {
                numerator: 1,
                denominator: 30000,
              },
            },
          },
        ],
      },
    ],
    id: 'VX-48',
  }

  return item
}

export const getFakeMetaCardItemType = () => {
  const item: ItemType = {
    metadata: {
      revision: 'VX-206,VX-207,VX-210,VX-212,VX-211',
      timespan: [
        {
          base: '',
          field: [
            {
              name: 'originalFormat',
              value: [
                {
                  value: 'mov,mp4,m4a,3gp,3g2,mj2',
                  uuid: '5f3efcff-f574-44c6-9fc7-0a1c9873fa9a',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: '04fa480b-f769-4228-8e14-0b46ebe7b945',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'originalVideoCodec',
              value: [
                {
                  value: 'h264',
                  uuid: '2f264ca7-0e27-41e5-a370-9240d837ee52',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: 'fedc77d6-b808-4781-99a3-22cf041ac67c',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'originalAudioCodec',
              value: [
                {
                  value: 'aac',
                  uuid: '68fb4dd3-3837-4151-8c4b-ef8432c682e4',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: '8cba0914-1314-44de-ad87-c81484e71bc4',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'startTimeCode',
              value: [
                {
                  value: '42@NTSC',
                  uuid: '5a2299ef-3425-411e-a67c-f93b28ade80d',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: 'e36ae10c-ff47-45a8-a4f3-fd25dad98f19',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'startSeconds',
              value: [
                {
                  value: '1.4014',
                  uuid: 'a2d57737-96ec-4838-8ae8-176910574d32',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: 'c690cd90-b8e4-44b0-baab-afbd8979bc9f',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'durationSeconds',
              value: [
                {
                  value: '6.006',
                  uuid: '948f5ec8-9ff4-4c31-9455-a9ee6d5b35d3',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: '00c7a3f7-ed90-4b9c-ae85-e492311f0bc2',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'durationTimeCode',
              value: [
                {
                  value: '6006000@1000000',
                  uuid: '5161337b-4aa5-4158-8109-722f90343a0e',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: '6c1eee88-360f-4ed4-8510-5e385df369fa',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'originalWidth',
              value: [
                {
                  value: '1920',
                  uuid: 'ccbc433a-a92d-45bf-ab30-c2afadee6bac',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: '34d9663d-d439-424f-8150-c569bf6fceed',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'originalHeight',
              value: [
                {
                  value: '1080',
                  uuid: 'fb3debfc-c290-4b80-9c2c-258b85d7312b',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: '4e1db4f3-f8ba-46d4-a509-46838536a08e',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'mimeType',
              value: [
                {
                  value: 'video/quicktime',
                  uuid: 'f27d5649-6dbd-4d0a-8579-5548944c0acf',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: '8c91089d-045b-46cd-907d-cf2c51863510',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'itemId',
              value: [
                {
                  value: 'VX-48',
                  uuid: '5e2751a0-5581-48ec-8de2-6f61102e478a',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: 'dcd80c8f-9ef1-4231-9b3a-5437f13eeb47',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'mediaType',
              value: [
                {
                  value: 'video',
                  uuid: '78d2cc2a-0b8e-4def-9c22-255bbd5a90e1',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.110+0000'),
                  change: 'VX-212',
                },
              ],
              uuid: '20b6a518-f9b0-4500-8bbe-8113f0c44e3a',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.110+0000'),
              change: 'VX-212',
            },
            {
              name: 'title',
              value: [
                {
                  value: 'Test 3',
                  uuid: '5914ff91-507f-4d1d-86de-3ace3be4e889',
                  user: 'admin',
                  timestamp: new Date('2022-07-04T23:10:49.371+0000'),
                  change: 'VX-206',
                },
              ],
              uuid: 'ddb8bcc3-83ab-476b-974c-e887e3e8df40',
              user: 'admin',
              timestamp: new Date('2022-07-04T23:10:49.371+0000'),
              change: 'VX-206',
            },
            {
              name: 'created',
              value: [
                {
                  value: '2022-07-04T23:10:49.350Z',
                  uuid: '195c04ae-c382-48d6-8cf8-d997c8de380a',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:10:49.449+0000'),
                  change: 'VX-207',
                },
              ],
              uuid: 'cd977102-d1d2-4db5-84de-d236bcd47795',
              user: 'system',
              timestamp: new Date('2022-07-04T23:10:49.449+0000'),
              change: 'VX-207',
            },
            {
              name: 'shapeTag',
              value: [
                {
                  value: 'original',
                  uuid: 'b3d30ad5-646f-4144-922e-80b937e40051',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.048+0000'),
                  change: 'VX-211',
                },
              ],
              uuid: 'df7df1c2-735a-438c-9a4d-ceb1e3dd0e7d',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.048+0000'),
              change: 'VX-211',
            },
            {
              name: 'representativeThumbnail',
              value: [
                {
                  value: '/API/thumbnail/VX-2/VX-48;version=0/0@60000',
                  uuid: '56c11ebc-9940-4d56-85c5-4530513d8ff1',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.048+0000'),
                  change: 'VX-211',
                },
              ],
              uuid: '1dffa625-e998-4184-b7c6-0cee0606ba8a',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.048+0000'),
              change: 'VX-211',
            },
            {
              name: 'representativeThumbnailNoAuth',
              value: [
                {
                  value: '/sample.jpg',
                  uuid: '878052e4-378d-4853-92a6-fad11fe8d098',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:12.048+0000'),
                  change: 'VX-211',
                },
              ],
              uuid: '85969551-1144-41ca-8d2e-ef48309b8e38',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:12.048+0000'),
              change: 'VX-211',
            },
            {
              name: '__user',
              value: [
                {
                  value: 'admin',
                },
              ],
            },
            {
              name: 'user',
              value: [
                {
                  value: 'admin',
                },
              ],
            },
            {
              name: '__owner',
              value: [
                {
                  value: 'admin',
                },
              ],
            },
            {
              name: '__metadata_last_modified',
              value: [
                {
                  value: '2022-07-04T23:24:12.110Z',
                },
              ],
            },
            {
              name: '__placeholder_shape_size',
              value: [
                {
                  value: '0',
                },
              ],
            },
            {
              name: '__shape_size',
              value: [
                {
                  value: '1',
                },
              ],
            },
            {
              name: '__shape',
              value: [
                {
                  value: 'VX-49',
                },
              ],
            },
            {
              name: '__version_count',
              value: [
                {
                  value: '1',
                },
              ],
            },
            {
              name: '__version',
              value: [
                {
                  value: '0',
                },
              ],
            },
            {
              name: '__shapetag_original_hash',
              value: [
                {
                  value: '8b18500ec652b56d70851eaff934b328876799cc',
                },
              ],
            },
            {
              name: '__shape_last_added',
              value: [
                {
                  value: '2022-07-04T23:10:49.556Z',
                },
              ],
            },
            {
              name: '__storage_original',
              value: [
                {
                  value: 'VX-1',
                },
              ],
            },
            {
              name: '__storage_original_size',
              value: [
                {
                  value: '1',
                },
              ],
            },
            {
              name: '__storage_size',
              value: [
                {
                  value: '1',
                },
              ],
            },
            {
              name: '__storage',
              value: [
                {
                  value: 'VX-1',
                },
              ],
            },
            {
              name: '__storagegroup_size',
              value: [
                {
                  value: '0',
                },
              ],
            },
            {
              name: '__sequence_size',
              value: [
                {
                  value: '0',
                },
              ],
            },
            {
              name: '__collection_size',
              value: [
                {
                  value: '0',
                },
              ],
            },
            {
              name: '__ancestor_collection_size',
              value: [
                {
                  value: '0',
                },
              ],
            },
          ],
          group: [],
          start: '-INF',
          end: '+INF',
        },
        {
          base: '',
          field: [
            {
              name: 'created',
              value: [
                {
                  value: '2022-07-04T22:57:55.962Z',
                  uuid: '57677559-a0ba-4b92-8aa5-9e4a18ff15f6',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '1edb0267-4899-4f3d-a554-c44da32a4987',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'originalFormat',
              value: [
                {
                  value: 'mov,mp4,m4a,3gp,3g2,mj2',
                  uuid: '44e2003b-69dc-4af8-bc4d-13c30ca1a5ba',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '723b9ede-8480-41d9-b132-594f7b60e1b7',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'originalVideoCodec',
              value: [
                {
                  value: 'h264',
                  uuid: '4be3d786-6669-4d1a-acea-9e0d9286e72d',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: 'a045341e-2f6c-4318-8c49-d214f4778e86',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'originalAudioCodec',
              value: [
                {
                  value: 'aac',
                  uuid: 'cb9cda25-039a-4140-b022-f63770bf38ae',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: 'd68d32de-89f0-4eef-ac3f-ddcf5a897079',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'durationSeconds',
              value: [
                {
                  value: '102.101333',
                  uuid: 'e6a67062-760e-446b-9084-8edd35867c32',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '2cb515a5-efc5-467c-b4f3-79d0e79993e6',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'durationTimeCode',
              value: [
                {
                  value: '102101333@1000000',
                  uuid: 'cbc333b4-105c-49ad-b00d-dccebfba7b53',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: 'cec13188-e1fc-4f67-8e89-f37c09fee35b',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'originalWidth',
              value: [
                {
                  value: '1920',
                  uuid: 'de0e6685-9e70-4664-bb1b-07f8f014ccc0',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '881b7dbd-0cce-4ade-bfee-1833941cbed2',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'originalHeight',
              value: [
                {
                  value: '1080',
                  uuid: '1ab2a760-e1bf-4cd8-a226-92eb74e6b6ea',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: 'b6e6f3a4-c1a7-4559-a191-8c4ceaccb31e',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'mimeType',
              value: [
                {
                  value: 'video/mp4',
                  uuid: 'ac5a9eab-3f92-43f2-a9a0-8f9df34ecf2f',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '65cb73af-b593-4ffe-9c62-6d3a84266f2c',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'itemId',
              value: [
                {
                  value: 'VX-46',
                  uuid: 'b669c656-3ebe-4d97-bfcf-150b272424d9',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '9845e458-5dfc-4e21-a20d-14a5a7cb1155',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'mediaType',
              value: [
                {
                  value: 'video',
                  uuid: '1721614a-3bd6-4600-890e-72ee1b05cd59',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: 'ae904f08-d570-43f4-aae3-3b6fae1363c5',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'originalFilename',
              value: [
                {
                  value: 'AJA-MM-TEST-111122-FINAL.mp4',
                  uuid: '5b03ff7e-6244-4fb1-9c87-27606d3b102a',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '31afb3e5-9c5a-4f70-8499-4b091fe56387',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'shapeTag',
              value: [
                {
                  value: 'original',
                  uuid: 'cfb5527a-6a86-4fca-b28d-dc94ec4a92a9',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
                {
                  value: '__mp4',
                  uuid: '9e027176-077c-45f4-9a15-28361ced0d49',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: 'f25c0f46-0fba-404e-8828-cf02ebdd6230',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'representativeThumbnail',
              value: [
                {
                  value: '/API/thumbnail/VX-2/VX-46;version=0/1250@PAL',
                  uuid: 'dce4ddc1-7639-4810-bb51-cf32f4a245ed',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '5e5d0281-458e-4e14-b79a-e1e549deff8b',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
            {
              name: 'representativeThumbnailNoAuth',
              value: [
                {
                  value: '/sample.jpg',
                  uuid: 'e56967ea-a268-4ca4-8a89-456f6a0faf8f',
                  user: 'system',
                  timestamp: new Date('2022-07-04T23:24:11.823+0000'),
                  change: 'VX-210',
                },
              ],
              uuid: '9d484d9f-1fdd-4e4b-8e90-c5290e3a3e2c',
              user: 'system',
              timestamp: new Date('2022-07-04T23:24:11.823+0000'),
              change: 'VX-210',
            },
          ],
          group: [],
          start: '0@PAL',
          end: '115@PAL',
        },
      ],
    },
    shape: [],
    access: [],
    timespan: [
      {
        start: '-INF',
        end: '+INF',
      },
    ],
    externalId: [],
    id: 'VX-48',
    start: '-INF',
    end: '+INF',
  }

  return item
}

export const getFakeItems = () => {
  return {
    hits: 14,
    item: [
      {
        metadata: {
          revision: 'VX-206,VX-207,VX-210,VX-212,VX-211',
          timespan: [
            {
              field: [
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: '5f3efcff-f574-44c6-9fc7-0a1c9873fa9a',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: '04fa480b-f769-4228-8e14-0b46ebe7b945',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: '2f264ca7-0e27-41e5-a370-9240d837ee52',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: 'fedc77d6-b808-4781-99a3-22cf041ac67c',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: '68fb4dd3-3837-4151-8c4b-ef8432c682e4',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: '8cba0914-1314-44de-ad87-c81484e71bc4',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'startTimeCode',
                  value: [
                    {
                      value: '42@NTSC',
                      uuid: '5a2299ef-3425-411e-a67c-f93b28ade80d',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: 'e36ae10c-ff47-45a8-a4f3-fd25dad98f19',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'startSeconds',
                  value: [
                    {
                      value: '1.4014',
                      uuid: 'a2d57737-96ec-4838-8ae8-176910574d32',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: 'c690cd90-b8e4-44b0-baab-afbd8979bc9f',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '6.006',
                      uuid: '948f5ec8-9ff4-4c31-9455-a9ee6d5b35d3',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: '00c7a3f7-ed90-4b9c-ae85-e492311f0bc2',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '6006000@1000000',
                      uuid: '5161337b-4aa5-4158-8109-722f90343a0e',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: '6c1eee88-360f-4ed4-8510-5e385df369fa',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: 'ccbc433a-a92d-45bf-ab30-c2afadee6bac',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: '34d9663d-d439-424f-8150-c569bf6fceed',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: 'fb3debfc-c290-4b80-9c2c-258b85d7312b',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: '4e1db4f3-f8ba-46d4-a509-46838536a08e',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/quicktime',
                      uuid: 'f27d5649-6dbd-4d0a-8579-5548944c0acf',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: '8c91089d-045b-46cd-907d-cf2c51863510',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-48',
                      uuid: '5e2751a0-5581-48ec-8de2-6f61102e478a',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: 'dcd80c8f-9ef1-4231-9b3a-5437f13eeb47',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: '78d2cc2a-0b8e-4def-9c22-255bbd5a90e1',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.110+0000',
                      change: 'VX-212',
                    },
                  ],
                  uuid: '20b6a518-f9b0-4500-8bbe-8113f0c44e3a',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.110+0000',
                  change: 'VX-212',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'Test 3',
                      uuid: '5914ff91-507f-4d1d-86de-3ace3be4e889',
                      user: 'admin',
                      timestamp: '2022-07-04T23:10:49.371+0000',
                      change: 'VX-206',
                    },
                  ],
                  uuid: 'ddb8bcc3-83ab-476b-974c-e887e3e8df40',
                  user: 'admin',
                  timestamp: '2022-07-04T23:10:49.371+0000',
                  change: 'VX-206',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-04T23:10:49.350Z',
                      uuid: '195c04ae-c382-48d6-8cf8-d997c8de380a',
                      user: 'system',
                      timestamp: '2022-07-04T23:10:49.449+0000',
                      change: 'VX-207',
                    },
                  ],
                  uuid: 'cd977102-d1d2-4db5-84de-d236bcd47795',
                  user: 'system',
                  timestamp: '2022-07-04T23:10:49.449+0000',
                  change: 'VX-207',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: 'original',
                      uuid: 'b3d30ad5-646f-4144-922e-80b937e40051',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.048+0000',
                      change: 'VX-211',
                    },
                  ],
                  uuid: 'df7df1c2-735a-438c-9a4d-ceb1e3dd0e7d',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.048+0000',
                  change: 'VX-211',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-48;version=0/0@60000',
                      uuid: '56c11ebc-9940-4d56-85c5-4530513d8ff1',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.048+0000',
                      change: 'VX-211',
                    },
                  ],
                  uuid: '1dffa625-e998-4184-b7c6-0cee0606ba8a',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.048+0000',
                  change: 'VX-211',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: '878052e4-378d-4853-92a6-fad11fe8d098',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:12.048+0000',
                      change: 'VX-211',
                    },
                  ],
                  uuid: '85969551-1144-41ca-8d2e-ef48309b8e38',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:12.048+0000',
                  change: 'VX-211',
                },
                {
                  name: '__user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: 'user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__owner',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__metadata_last_modified',
                  value: [
                    {
                      value: '2022-07-04T23:24:12.110Z',
                    },
                  ],
                },
                {
                  name: '__placeholder_shape_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shape_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-49',
                    },
                  ],
                },
                {
                  name: '__version_count',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__version',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shapetag_original_hash',
                  value: [
                    {
                      value: '8b18500ec652b56d70851eaff934b328876799cc',
                    },
                  ],
                },
                {
                  name: '__shape_last_added',
                  value: [
                    {
                      value: '2022-07-04T23:10:49.556Z',
                    },
                  ],
                },
                {
                  name: '__storage_original',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage_original_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storagegroup_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__sequence_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__ancestor_collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
              ],
              group: [],
              start: '-INF',
              end: '+INF',
            },
            {
              field: [
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-04T22:57:55.962Z',
                      uuid: '57677559-a0ba-4b92-8aa5-9e4a18ff15f6',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: '1edb0267-4899-4f3d-a554-c44da32a4987',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: '44e2003b-69dc-4af8-bc4d-13c30ca1a5ba',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: '723b9ede-8480-41d9-b132-594f7b60e1b7',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: '4be3d786-6669-4d1a-acea-9e0d9286e72d',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: 'a045341e-2f6c-4318-8c49-d214f4778e86',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: 'cb9cda25-039a-4140-b022-f63770bf38ae',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: 'd68d32de-89f0-4eef-ac3f-ddcf5a897079',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '102.101333',
                      uuid: 'e6a67062-760e-446b-9084-8edd35867c32',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: '2cb515a5-efc5-467c-b4f3-79d0e79993e6',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '102101333@1000000',
                      uuid: 'cbc333b4-105c-49ad-b00d-dccebfba7b53',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: 'cec13188-e1fc-4f67-8e89-f37c09fee35b',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: 'de0e6685-9e70-4664-bb1b-07f8f014ccc0',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: '881b7dbd-0cce-4ade-bfee-1833941cbed2',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: '1ab2a760-e1bf-4cd8-a226-92eb74e6b6ea',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: 'b6e6f3a4-c1a7-4559-a191-8c4ceaccb31e',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/mp4',
                      uuid: 'ac5a9eab-3f92-43f2-a9a0-8f9df34ecf2f',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: '65cb73af-b593-4ffe-9c62-6d3a84266f2c',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-46',
                      uuid: 'b669c656-3ebe-4d97-bfcf-150b272424d9',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: '9845e458-5dfc-4e21-a20d-14a5a7cb1155',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: '1721614a-3bd6-4600-890e-72ee1b05cd59',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: 'ae904f08-d570-43f4-aae3-3b6fae1363c5',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'originalFilename',
                  value: [
                    {
                      value: 'AJA-MM-TEST-111122-FINAL.mp4',
                      uuid: '5b03ff7e-6244-4fb1-9c87-27606d3b102a',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: '31afb3e5-9c5a-4f70-8499-4b091fe56387',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: 'original',
                      uuid: 'cfb5527a-6a86-4fca-b28d-dc94ec4a92a9',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                    {
                      value: '__mp4',
                      uuid: '9e027176-077c-45f4-9a15-28361ced0d49',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: 'f25c0f46-0fba-404e-8828-cf02ebdd6230',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-46;version=0/1250@PAL',
                      uuid: 'dce4ddc1-7639-4810-bb51-cf32f4a245ed',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: '5e5d0281-458e-4e14-b79a-e1e549deff8b',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: 'e56967ea-a268-4ca4-8a89-456f6a0faf8f',
                      user: 'system',
                      timestamp: '2022-07-04T23:24:11.823+0000',
                      change: 'VX-210',
                    },
                  ],
                  uuid: '9d484d9f-1fdd-4e4b-8e90-c5290e3a3e2c',
                  user: 'system',
                  timestamp: '2022-07-04T23:24:11.823+0000',
                  change: 'VX-210',
                },
              ],
              group: [],
              start: '0@PAL',
              end: '115@PAL',
            },
          ],
        },
        shape: [],
        access: [],
        timespan: [
          {
            start: '-INF',
            end: '+INF',
          },
        ],
        externalId: [],
        id: 'VX-48',
        start: '-INF',
        end: '+INF',
      },
      {
        metadata: {
          revision: 'VX-205,VX-208,VX-209',
          timespan: [
            {
              field: [
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '102101333@1000000',
                      uuid: '8b491b54-240d-4080-bc3c-9133e89586bf',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: '9610b8c8-ecce-4b9c-9050-d17a11d99bba',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: '5420fff6-844a-4638-b075-4e47a49e4dc2',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: 'ddc7cac3-2976-4696-af9c-d8274ad7baca',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: 'a55525b8-cc22-44ed-8ad6-4e47c73c85a0',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: '1b733425-70eb-4018-98d7-cc80011459fb',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/mp4',
                      uuid: '9de2e057-9a7e-4b6d-bbeb-0495fbe43136',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: 'a0260671-e38f-4e65-81ff-894c18c586ad',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-46',
                      uuid: '4a1cbaee-a96c-4359-a46f-9ab41e5f432e',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: 'c95abf5f-7fc9-42d6-b3b9-413ec0206e4a',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: '04cedb8e-7e98-4611-a8b8-05e7f7c8f750',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: '28836a81-534e-4f1a-a559-26aff1cc3bf7',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'originalFilename',
                  value: [
                    {
                      value: 'AJA-MM-TEST-111122-FINAL.mp4',
                      uuid: '5344468a-639a-4d37-83d1-0a9fa79ba513',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: '28215c07-2d41-4904-97d6-fcd1d3a1caad',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: '__mp4',
                      uuid: '996922d5-f714-4592-b663-74c2be85c697',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                    {
                      value: 'original',
                      uuid: '09cba157-85c4-4f81-b6ff-9d664d97a01c',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: '8572de48-13a0-40a7-8ad6-b928cb053f57',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-46;version=0/1250@PAL',
                      uuid: 'cbad75fd-7519-4de3-b17d-be8d115e66ee',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: '4ea4303a-201e-4eee-98d4-2aab1b57126d',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: 'cbfa7586-30c5-410c-bce0-b4a8b2de112b',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: 'a8ca8c78-3a73-49ce-b860-e748278675e5',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-04T22:57:55.962Z',
                      uuid: '09f4cf2c-b1d4-41d7-8eb7-d426330a1a9f',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: '58e42625-3132-479e-95da-8c5b8f03b15c',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: '65865d9d-fa2d-452e-9e25-1b673179e687',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: 'fc99d716-dc58-450d-8833-eb72e86f5f93',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: '42f88182-bbbf-44b1-924e-2d7af9a016eb',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: 'b7c9943b-736d-434a-8c2a-ed3a241f503f',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: 'c3135120-85e9-40e6-aa57-a13309f02f7c',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: '126d2ddd-0030-4e1d-9aea-573cbd05406e',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '102.101333',
                      uuid: '6fde4318-4be7-4bc4-8572-83726cc60e27',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.753+0000',
                      change: 'VX-208',
                    },
                  ],
                  uuid: '1341cf44-7ea7-458e-aaaa-114381f10f59',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.753+0000',
                  change: 'VX-208',
                },
              ],
              group: [],
              start: '0@PAL',
              end: '115@PAL',
            },
            {
              field: [
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: '__mp4',
                      uuid: '0ca20f63-eb7f-4e9f-9a9c-b21ea77a19c5',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.998+0000',
                      change: 'VX-209',
                    },
                  ],
                  uuid: '82a38a76-2557-4527-93b1-cb7ff80ab4ec',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.998+0000',
                  change: 'VX-209',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-47;version=0/0@PAL',
                      uuid: '042420ba-2818-40e7-8e55-80e0a4cb3c66',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.998+0000',
                      change: 'VX-209',
                    },
                  ],
                  uuid: '0d7ed32e-cf3b-4c6c-9bba-d773f202263a',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.998+0000',
                  change: 'VX-209',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: '159f4949-c048-47a6-a6df-4da503114a93',
                      user: 'system',
                      timestamp: '2022-07-04T23:11:39.998+0000',
                      change: 'VX-209',
                    },
                  ],
                  uuid: 'f03fc6bc-21dc-4905-9ddc-46b8fd1f73bc',
                  user: 'system',
                  timestamp: '2022-07-04T23:11:39.998+0000',
                  change: 'VX-209',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-04T23:04:49.525Z',
                      uuid: '02b173db-83a1-45d1-ba22-36fd64c72254',
                      user: 'system',
                      timestamp: '2022-07-04T23:04:49.588+0000',
                      change: 'VX-205',
                    },
                  ],
                  uuid: '6b3ae50d-34c8-44fa-a613-d1457b1248ce',
                  user: 'system',
                  timestamp: '2022-07-04T23:04:49.588+0000',
                  change: 'VX-205',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'none',
                      uuid: '18260d1e-454c-473b-952f-356c767e59ad',
                      user: 'system',
                      timestamp: '2022-07-04T23:04:49.588+0000',
                      change: 'VX-205',
                    },
                  ],
                  uuid: '14d81c50-7ce1-43ea-82d0-1b24402aa9a5',
                  user: 'system',
                  timestamp: '2022-07-04T23:04:49.588+0000',
                  change: 'VX-205',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-47',
                      uuid: '240d5055-be32-4dd6-ae54-893ba38df207',
                      user: 'system',
                      timestamp: '2022-07-04T23:04:49.588+0000',
                      change: 'VX-205',
                    },
                  ],
                  uuid: '02da6d20-20ca-46e9-8661-197426d9d98d',
                  user: 'system',
                  timestamp: '2022-07-04T23:04:49.588+0000',
                  change: 'VX-205',
                },
                {
                  name: '__user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: 'user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__owner',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__metadata_last_modified',
                  value: [
                    {
                      value: '2022-07-04T23:11:39.998Z',
                    },
                  ],
                },
                {
                  name: '__placeholder_shape_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shape_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-48',
                    },
                  ],
                },
                {
                  name: '__version_count',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__version',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shapetag___mp4_hash',
                  value: [
                    {
                      value: '346f74a143abfdf32e2927c4636f4b850197a94f',
                    },
                  ],
                },
                {
                  name: '__shape_last_added',
                  value: [
                    {
                      value: '2022-07-04T23:04:49.684Z',
                    },
                  ],
                },
                {
                  name: '__storage___mp4',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage___mp4_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storagegroup_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__sequence_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__ancestor_collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
              ],
              group: [],
              start: '-INF',
              end: '+INF',
            },
          ],
        },
        shape: [],
        access: [],
        timespan: [
          {
            start: '-INF',
            end: '+INF',
          },
        ],
        externalId: [],
        id: 'VX-47',
        start: '-INF',
        end: '+INF',
      },
      {
        metadata: {
          revision: 'VX-203,VX-199,VX-202,VX-201',
          timespan: [
            {
              field: [
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-04T22:57:55.962Z',
                      uuid: '5cce54ef-bdf1-4d57-9901-10b0eb421fad',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.025+0000',
                      change: 'VX-199',
                    },
                  ],
                  uuid: 'd5deaedd-c879-4008-bfe0-e2d64be4542e',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.025+0000',
                  change: 'VX-199',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: 'b5214428-af5b-4228-82b0-8458065ed83a',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.167+0000',
                      change: 'VX-201',
                    },
                  ],
                  uuid: '73b4d439-a34d-4c50-8c5d-f6d722a9814c',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.167+0000',
                  change: 'VX-201',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: 'd8ae8e7e-8a11-4611-a691-906aa2df5155',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.167+0000',
                      change: 'VX-201',
                    },
                  ],
                  uuid: '52653715-bee7-4a3b-8fc5-860e6a6ae3f1',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.167+0000',
                  change: 'VX-201',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: 'cb4cb1c5-c2a5-49c8-8f40-601ba705dffc',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.167+0000',
                      change: 'VX-201',
                    },
                  ],
                  uuid: '942a8fda-5028-44a8-863c-dc3fc25e9835',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.167+0000',
                  change: 'VX-201',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '102.101333',
                      uuid: 'baa91986-ec4b-450a-ae57-bb40014fb8ef',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.167+0000',
                      change: 'VX-201',
                    },
                  ],
                  uuid: 'ddeaa920-2421-4619-8912-148a78ac9459',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.167+0000',
                  change: 'VX-201',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '102101333@1000000',
                      uuid: '5f3f8f50-b8e6-4f7b-a841-7603dd9e9dec',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.167+0000',
                      change: 'VX-201',
                    },
                  ],
                  uuid: '068c3f12-6787-4aad-8c34-62426159b913',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.167+0000',
                  change: 'VX-201',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: '5c2ce538-e7b4-4e29-82d4-5dd4a9c840d5',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.167+0000',
                      change: 'VX-201',
                    },
                  ],
                  uuid: '20d52143-9e09-4e12-97a3-d6fcbb988b8a',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.167+0000',
                  change: 'VX-201',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: 'a208bf1f-e63d-4008-8d60-0aa11ba076ef',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.167+0000',
                      change: 'VX-201',
                    },
                  ],
                  uuid: '40f573a4-5f85-4815-9202-c9ad18b16aa1',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.167+0000',
                  change: 'VX-201',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/mp4',
                      uuid: '540cf444-a369-47cf-9fbb-b1bf7ffff8d4',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.167+0000',
                      change: 'VX-201',
                    },
                  ],
                  uuid: '72fd7ff9-618d-4b12-9e37-902940f49f24',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.167+0000',
                  change: 'VX-201',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-46',
                      uuid: '2ea51c94-54de-49ef-bc70-a2c220c16dfe',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.167+0000',
                      change: 'VX-201',
                    },
                  ],
                  uuid: 'c010fe96-c704-4958-888c-94cd9e35fc02',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.167+0000',
                  change: 'VX-201',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: 'b1d1527b-8cf3-4834-9b75-8ba5ee9ffe50',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.167+0000',
                      change: 'VX-201',
                    },
                  ],
                  uuid: 'cfcecaf6-86a1-467d-8dc1-06c8793ca6c1',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.167+0000',
                  change: 'VX-201',
                },
                {
                  name: 'originalFilename',
                  value: [
                    {
                      value: 'AJA-MM-TEST-111122-FINAL.mp4',
                      uuid: 'ad569051-0d07-4816-beac-d8d92829e90f',
                      user: 'system',
                      timestamp: '2022-07-04T22:57:56.205+0000',
                      change: 'VX-202',
                    },
                  ],
                  uuid: '54838a33-82b4-4d4d-82d2-752bf5d0f97b',
                  user: 'system',
                  timestamp: '2022-07-04T22:57:56.205+0000',
                  change: 'VX-202',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: 'original',
                      uuid: '24bacf74-6030-4316-97f6-f17d38c3b5b3',
                      user: 'system',
                      timestamp: '2022-07-04T23:00:48.349+0000',
                      change: 'VX-203',
                    },
                    {
                      value: '__mp4',
                      uuid: '8b186957-82e8-472e-a130-720b88c23b87',
                      user: 'system',
                      timestamp: '2022-07-04T23:00:48.349+0000',
                      change: 'VX-203',
                    },
                  ],
                  uuid: '561155d3-9071-4789-8099-fb6dc55eba6f',
                  user: 'system',
                  timestamp: '2022-07-04T23:00:48.349+0000',
                  change: 'VX-203',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-46;version=0/1250@PAL',
                      uuid: '28320c53-e4f6-47eb-95ff-4b692e5e32e1',
                      user: 'system',
                      timestamp: '2022-07-04T23:00:48.349+0000',
                      change: 'VX-203',
                    },
                  ],
                  uuid: '1ea02d87-9b87-4507-b4ca-5f6b0cc67088',
                  user: 'system',
                  timestamp: '2022-07-04T23:00:48.349+0000',
                  change: 'VX-203',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: 'd0a7b0a4-6708-4cc4-b00e-25285a340397',
                      user: 'system',
                      timestamp: '2022-07-04T23:00:48.349+0000',
                      change: 'VX-203',
                    },
                  ],
                  uuid: 'dea8ece6-241e-41cc-9bc1-8d0b841f53cd',
                  user: 'system',
                  timestamp: '2022-07-04T23:00:48.349+0000',
                  change: 'VX-203',
                },
                {
                  name: '__user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: 'user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__owner',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__metadata_last_modified',
                  value: [
                    {
                      value: '2022-07-04T23:00:48.349Z',
                    },
                  ],
                },
                {
                  name: '__placeholder_shape_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shape_size',
                  value: [
                    {
                      value: '2',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-47',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-46',
                    },
                  ],
                },
                {
                  name: '__version_count',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__version',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shapetag___mp4_hash',
                  value: [
                    {
                      value: 'cf5aa5a5df8a1263649b10723705bcb0cd3e5869',
                    },
                  ],
                },
                {
                  name: '__shapetag_original_hash',
                  value: [
                    {
                      value: '5851a26f28e804ca27b997a82b577bff14f154d3',
                    },
                  ],
                },
                {
                  name: '__shape_last_added',
                  value: [
                    {
                      value: '2022-07-04T22:57:56.330Z',
                    },
                  ],
                },
                {
                  name: '__storage___mp4',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage___mp4_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_original',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage_original_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storagegroup_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__sequence_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__ancestor_collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
              ],
              group: [],
              start: '-INF',
              end: '+INF',
            },
          ],
        },
        shape: [],
        access: [],
        timespan: [
          {
            start: '-INF',
            end: '+INF',
          },
        ],
        externalId: [],
        id: 'VX-46',
        start: '-INF',
        end: '+INF',
      },
      {
        metadata: {
          revision: 'VX-190,VX-189,VX-192,VX-191',
          timespan: [
            {
              field: [
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-04T22:37:34.832Z',
                      uuid: '95daf9cb-63e6-4893-aceb-b923ee654a44',
                      user: 'system',
                      timestamp: '2022-07-04T22:37:34.914+0000',
                      change: 'VX-189',
                    },
                  ],
                  uuid: 'def7b4b1-c5de-411d-a840-0e0b16e5f9bd',
                  user: 'system',
                  timestamp: '2022-07-04T22:37:34.914+0000',
                  change: 'VX-189',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: 'original',
                      uuid: '792ed6ea-c324-4797-bb47-6bf57f7169f9',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.386+0000',
                      change: 'VX-191',
                    },
                  ],
                  uuid: '1e065a7c-fd72-4eb9-9c98-1dfffdad9ddb',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.386+0000',
                  change: 'VX-191',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-44;version=0/0@50',
                      uuid: '29c20c61-4feb-46e3-b2b5-56ec68d42554',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.386+0000',
                      change: 'VX-191',
                    },
                  ],
                  uuid: 'e672cbb7-7ef0-4585-a45d-f7d07b4c3ee8',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.386+0000',
                  change: 'VX-191',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: '7655e893-61c1-4f79-81a4-eefec2e8ea0e',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.386+0000',
                      change: 'VX-191',
                    },
                  ],
                  uuid: 'c512b475-2bbd-4ca4-b8da-ecc8835aaf42',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.386+0000',
                  change: 'VX-191',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: '6d8c05d2-7dc9-450f-a80c-4295cae1b8c1',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: 'aa3a5ea0-4d49-4448-98c0-4e8a9aa34380',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: 'b630b8d1-3245-4386-8de6-f141f585e20c',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: '70e08923-f8af-497c-ab15-a4d74e13c3dc',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: 'e68ce8c5-1f02-4cd1-9d74-9d23edec9212',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: '18905d84-b787-49ba-a970-d82bf881af96',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: 'startTimeCode',
                  value: [
                    {
                      value: '36@PAL',
                      uuid: '48ed0e6b-2ef8-4e36-99d5-3a65339aff92',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: 'eb2f3ee0-dc1f-4349-b24b-344d0f7e2f5d',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: 'startSeconds',
                  value: [
                    {
                      value: '1.44',
                      uuid: '7793bfff-e770-4fb9-97e5-bf8c3112b8d4',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: 'c12fedc5-52ac-42c9-9d5c-d9f60082f0eb',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '6.04',
                      uuid: '68d49cb1-8efe-430f-aa48-b07e2e9676a3',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: '2b281d00-7283-4c73-a0f6-1514606c47f9',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '6040000@1000000',
                      uuid: '7b777db2-ab2d-4c4e-b2cc-8d08737ef101',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: '6975d33b-87a8-498a-8591-f26c4083dd5b',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: '30b2592d-7bdf-429d-b1f8-28a426f67a25',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: '788e4553-a5e8-4684-a433-1a2a75557f7f',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: 'e9dd305a-f2aa-4197-9c69-7450caa1d5d2',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: '558443d7-90be-4e67-a388-180802ac9c9d',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/quicktime',
                      uuid: 'da6a83f2-7b55-49ad-83a7-db5b9261f91b',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: 'ae209e0c-571b-456d-8b8b-3b01ed7ae596',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-44',
                      uuid: '5b8c90e9-d605-4856-9ed5-301ba7ea398c',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: '5545d6a4-c44f-46dc-845b-14810d726bb7',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: '268bea1d-bad6-4afe-8244-14118f257de5',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.612+0000',
                      change: 'VX-192',
                    },
                  ],
                  uuid: 'b3d6e557-9a80-44b0-a9da-838d2c1eb836',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.612+0000',
                  change: 'VX-192',
                },
                {
                  name: '__user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: 'user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__owner',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__metadata_last_modified',
                  value: [
                    {
                      value: '2022-07-04T22:42:08.612Z',
                    },
                  ],
                },
                {
                  name: '__placeholder_shape_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shape_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-44',
                    },
                  ],
                },
                {
                  name: '__version_count',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__version',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shapetag_original_hash',
                  value: [
                    {
                      value: '6766c37a166ddeb12c5ba5d86e4709fb8878c520',
                    },
                  ],
                },
                {
                  name: '__shape_last_added',
                  value: [
                    {
                      value: '2022-07-04T22:37:35.043Z',
                    },
                  ],
                },
                {
                  name: '__storage_original',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage_original_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storagegroup_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__sequence_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__ancestor_collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
              ],
              group: [],
              start: '-INF',
              end: '+INF',
            },
            {
              field: [
                {
                  name: 'item_shortDescription',
                  value: [
                    {
                      value: 'Myshort',
                      lang: 'en_US',
                      uuid: '5b83bc7d-4b5e-4daf-85e8-5fbcf786c549',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '1f4222c8-c7a3-493a-b963-5a4aff8769fc',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'My title V2!',
                      lang: 'en_US',
                      uuid: '3f6a6144-dfee-47fd-9a74-2aec8a5b8177',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: 'a691bf19-8955-4d31-8f7c-7aab62aaecd3',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
              ],
              group: [],
              start: '90@PAL',
              end: '115@PAL',
            },
            {
              field: [
                {
                  name: 'item_shortDescription',
                  value: [
                    {
                      value: 'Short description!',
                      uuid: '5d9a4195-c6c3-42b7-8c62-aa43dc44e21e',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '734b2005-87d2-4a8a-bdc8-f1a152e9df9d',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'item_broadcastCenter',
                  value: [
                    {
                      value: 'Broadcast Center Location',
                      uuid: '79ed581c-6b1c-4ea1-b58d-ca8fa4f35a57',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '272cdd02-72df-4667-b4e9-0317228fe08e',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'item_channel',
                  value: [
                    {
                      value: 'Al Jazeera English',
                      uuid: 'c785944e-eb91-4ef1-a62e-289ec2756208',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: 'dda93fd2-3fe8-46c7-a9d4-60ad1fe21732',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'AJE-TV-SIVAYT-240522-FINAL.mp4',
                      uuid: '7568a61d-1a2b-4296-ab39-5ac010ee7e97',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '3dd58440-d881-4a11-a0e7-259103537878',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'dsc',
                  value: [
                    {
                      value: '',
                      uuid: '35eb6753-82ed-4b56-a23f-fe14bbe99239',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: 'a3a4fa25-32af-40d1-b322-44c319255564',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-06-03T14:46:35.379Z',
                      uuid: '1ab234f5-e302-48f6-9b02-dc4e1919bb7c',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '87a51f9a-fd83-4310-9991-2c9b83eca44e',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: '4f992e54-9f93-4bcf-9313-0132e676f31e',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '2a0c887a-337e-4843-860e-23cb6e5b362e',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: 'dc427864-f355-47eb-bd47-b037ba3ae93c',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '67d9637c-040e-4fd6-801c-aad7f77b5051',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: 'a24c43f6-55ad-472e-85de-f7aa493c6f56',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: 'a75b4e03-62ed-4fdf-afa7-a80144f070f4',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '109.312',
                      uuid: 'b3fba6de-1ecf-4e59-9c99-39cc763eee18',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: 'f1377750-f57a-4358-80dc-520add32136f',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '109312000@1000000',
                      uuid: '2ad33178-4c48-41fb-b5fa-88f80d1188a8',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '74341490-ebe1-4fda-a3bc-f772737727a7',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: 'b9604ab7-7dc4-4541-9199-d485058be602',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '386f88d8-4cdd-4e7b-802d-f5a632e5a177',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: '277d3199-64a4-4d25-bf76-8c06ae08d4d5',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: 'c67e57d4-2ada-4c13-a00d-d2f5142a4a46',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/mp4',
                      uuid: '38c10a8c-4b5b-408b-a01a-f45df520b338',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '16a22e4b-c07d-4d51-ae8d-69c9850216fa',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-10',
                      uuid: 'f854e4e5-2172-401e-b464-d02e4c4f6183',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '3d6aa83a-2646-4566-8cf2-329cd2d777f8',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'originalUri',
                  value: [
                    {
                      value:
                        's3://AKIA5ZS4U72YCBCXNEGT:_VSENC__VePlLp3sWU6qjnoUUFpul3eGZ4%2FkBeEw4AWoxQQ9V8hYu90UC1WItk0GEzOm0Ggpy3fh2MMR%2Fcw=@mam-storage-lab/vidispine02/video/VX-13.mp4?region=eu-west-1',
                      uuid: '00cfa34e-3624-4f6e-bd1c-fef70c232051',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: 'e2f36ce9-1323-4f4e-8435-fceb11c4a229',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'originalFilename',
                  value: [
                    {
                      value: 'AJE-TV-SIVAYT-240522-FINAL.mp4',
                      uuid: '7cab9211-5341-4d44-94b0-2944558f22ed',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: 'd0f2e3c8-ef10-464b-a27a-75409b911781',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: 'c83380cb-3372-41a4-b7f9-c590fc1c7c4b',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '6e3380ee-1b33-4bf0-a59d-72b16c981685',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: '__mp4',
                      uuid: '59e903b7-2581-4e0b-b382-ac12cd434f41',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                    {
                      value: 'original',
                      uuid: 'f1272cfe-8161-4930-9cbe-7cb1fa704c6d',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '06e2f69a-9ae3-4337-92f1-1f7cf517e0b9',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-10;version=0/1250@PAL',
                      uuid: '9bb4eee4-472f-41fb-9337-311b73415a7b',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '523794f7-5c31-4f95-8a23-0d82c5f28c82',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: 'de8fec3f-a354-4556-98e5-3a3558d77539',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '59ccd328-9949-4e41-9e05-754905ca2456',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
                {
                  name: 'miljenko_ime',
                  value: [
                    {
                      value: 'dubravko',
                      uuid: '716a1bb9-3a19-4684-b654-ddaa95cfd3c1',
                      user: 'system',
                      timestamp: '2022-07-04T22:42:08.082+0000',
                      change: 'VX-190',
                    },
                  ],
                  uuid: '0f390cd3-19cf-4348-8d13-060365dd012b',
                  user: 'system',
                  timestamp: '2022-07-04T22:42:08.082+0000',
                  change: 'VX-190',
                },
              ],
              group: [],
              start: '0@PAL',
              end: '115@PAL',
            },
          ],
        },
        shape: [],
        access: [],
        timespan: [
          {
            start: '-INF',
            end: '+INF',
          },
        ],
        externalId: [],
        id: 'VX-44',
        start: '-INF',
        end: '+INF',
      },
      {
        metadata: {
          revision: 'VX-187,VX-184,VX-183,VX-186,VX-185',
          timespan: [
            {
              field: [
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: '9d6187e6-d8e5-4531-82da-8d782fe06fe4',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: '621bb56c-1454-4e51-be86-c8cdf42c6710',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/quicktime',
                      uuid: '923db50b-6b0b-486e-b292-a453a79fa290',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: '96359f2e-8fe6-4cf3-8e93-32e0118a805d',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-43',
                      uuid: '31fa6620-69c6-4a50-8618-d842e4676039',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: '00f7effe-8261-4bd2-9ac3-e3d75ab154c8',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: '95f55036-f61a-41ca-b652-183dabc5537a',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: 'd966c159-793c-4420-813f-d8a81f151244',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'Copy of 10',
                      uuid: 'f3ac3460-8384-47ee-8f6e-207d915bf361',
                      user: 'admin',
                      timestamp: '2022-07-04T22:19:23.112+0000',
                      change: 'VX-183',
                    },
                  ],
                  uuid: '00a218e9-fac4-4e0d-8527-85172864ea1e',
                  user: 'admin',
                  timestamp: '2022-07-04T22:19:23.112+0000',
                  change: 'VX-183',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-04T22:19:23.092Z',
                      uuid: 'd33deb70-2803-4d7d-83c8-7db9dbda5c21',
                      user: 'system',
                      timestamp: '2022-07-04T22:19:23.204+0000',
                      change: 'VX-184',
                    },
                  ],
                  uuid: 'afbd43b6-368b-4f73-8ba8-4c7154bcdfce',
                  user: 'system',
                  timestamp: '2022-07-04T22:19:23.204+0000',
                  change: 'VX-184',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: 'original',
                      uuid: '815c0efc-4abd-42a0-b4f1-921e0db8ea67',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.513+0000',
                      change: 'VX-186',
                    },
                  ],
                  uuid: 'e0c16361-be6c-4519-93e3-f473a52afb3a',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.513+0000',
                  change: 'VX-186',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-43;version=0/0@50',
                      uuid: '438f48e6-0e0c-46dc-bfe9-04028f34e508',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.513+0000',
                      change: 'VX-186',
                    },
                  ],
                  uuid: 'a7acb0e3-a258-41c0-92ee-3944ca3ccd32',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.513+0000',
                  change: 'VX-186',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: '3dcf404d-e251-4d5d-ab6e-16d210ffcd72',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.513+0000',
                      change: 'VX-186',
                    },
                  ],
                  uuid: 'f5618ced-e0e9-4d94-aadb-564456180cdb',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.513+0000',
                  change: 'VX-186',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: 'af43b351-4aa2-4eb7-8f45-89118b8ff73c',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: '63154be5-7a54-4f16-a008-48d1453ce477',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: 'cfdc4ad8-6f53-48ea-890f-a495de71ef64',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: '14ab969b-ab95-4623-a981-2b3ae3af36d2',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: 'b76e6deb-fbde-4c94-b5ba-6be2ac413943',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: 'a26f72ed-abb0-487c-a1ab-6138b5ef1fb2',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: 'startTimeCode',
                  value: [
                    {
                      value: '36@PAL',
                      uuid: '4685e8d8-a8ed-439e-8583-fb34476bd8c0',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: '9ab3773f-fb48-4874-841e-593de44d6d3d',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: 'startSeconds',
                  value: [
                    {
                      value: '1.44',
                      uuid: '372aa4c3-7ba3-4d4d-ae0a-364b27dd30e8',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: '38ca634a-47e2-4bcb-8016-40025bb174ba',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '6.04',
                      uuid: 'ef90e2f2-adb6-4762-ac6d-168f25af0d55',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: 'ae8da22d-03f7-494e-a689-449bc12f35ea',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '6040000@1000000',
                      uuid: 'c6ff4ae9-3cc5-449e-9299-19834926b33a',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: '793a2ba7-9730-416c-bbc2-050fafd2d28f',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: 'c14471e4-5dce-4e8d-ac40-a72950461a29',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.633+0000',
                      change: 'VX-187',
                    },
                  ],
                  uuid: 'b632b9ae-cc16-4dd1-aa41-2ee45968e798',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.633+0000',
                  change: 'VX-187',
                },
                {
                  name: '__user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: 'user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__owner',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__metadata_last_modified',
                  value: [
                    {
                      value: '2022-07-04T22:20:02.633Z',
                    },
                  ],
                },
                {
                  name: '__placeholder_shape_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shape_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-43',
                    },
                  ],
                },
                {
                  name: '__version_count',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__version',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shapetag_original_hash',
                  value: [
                    {
                      value: 'f395ffba87dd8350f1dbb258195ce4f4c0eb06f9',
                    },
                  ],
                },
                {
                  name: '__shape_last_added',
                  value: [
                    {
                      value: '2022-07-04T22:19:23.309Z',
                    },
                  ],
                },
                {
                  name: '__storage_original',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage_original_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storagegroup_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__sequence_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__ancestor_collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
              ],
              group: [],
              start: '-INF',
              end: '+INF',
            },
            {
              field: [
                {
                  name: 'item_shortDescription',
                  value: [
                    {
                      value: 'Myshort',
                      lang: 'en_US',
                      uuid: 'f8c9d6e7-9277-4646-bdb7-07a4c3f68a7f',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '7fb8310c-ed97-4351-9b48-dcf4a2508bf1',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'My title V2!',
                      lang: 'en_US',
                      uuid: '2b35549f-f4bf-4eb2-93af-1b5447937caa',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '175b0faa-eee4-4167-8efa-eea0e290bb07',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
              ],
              group: [],
              start: '90@PAL',
              end: '115@PAL',
            },
            {
              field: [
                {
                  name: 'item_shortDescription',
                  value: [
                    {
                      value: 'Short description!',
                      uuid: 'eda1b32e-0693-4a11-a852-f3cf08f2618d',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '78084a20-77d3-453f-8600-7522086113fd',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'item_broadcastCenter',
                  value: [
                    {
                      value: 'Broadcast Center Location',
                      uuid: '23bba178-c31e-42ac-b4b6-21d091d3aeff',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '394e7baf-80c8-4dae-8032-ac034cc9e6a1',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'item_channel',
                  value: [
                    {
                      value: 'Al Jazeera English',
                      uuid: '764a79dc-4863-4ecc-8264-b730d8386efd',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '06d9d4bd-7cb3-49a9-8d6e-d1016b9b7012',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'AJE-TV-SIVAYT-240522-FINAL.mp4',
                      uuid: 'b6a9f069-b968-4c3a-a784-0da112e4a658',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '5229aae4-a8a4-48a7-a9ac-f2a2414dca6d',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'dsc',
                  value: [
                    {
                      value: '',
                      uuid: '7c673fa9-9435-4553-b6db-2c8e3c4974c5',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '525b7748-6b78-4c16-91fc-bbefd85e113c',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-06-03T14:46:35.379Z',
                      uuid: '2e10b071-ebb8-4c17-802e-94c572441916',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: 'e7c395d3-8a46-4e3c-bc06-c2e65cd376d2',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: '60f130ee-90e7-4c4b-942b-68c6fbc21b19',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: 'b7119f44-0a6b-4984-9f18-747891f26957',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: '4b8c2ee9-d2f8-4c9f-9b1b-fbe6cc85d916',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '3e69b90f-7d1f-46d5-9909-b043489c71fe',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: 'fe71bf6e-3fd7-4398-b9b4-dbfbdd821f5c',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: 'df696a81-9ccc-46c0-8011-b3aca4db0c2f',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '109.312',
                      uuid: 'd4e9dfd4-27ce-4e81-ab3c-9c5692e5d1d5',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: 'c2a6ed34-5e7e-40f0-b49b-12c154124e4c',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '109312000@1000000',
                      uuid: '2bcb04f0-1a5e-4c10-b5ef-2ed6588fb171',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '8e3f4b4e-c8b6-421c-b0ca-6671d26a820f',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: '4237218c-3b62-4a4c-b080-e14fe3ea68d1',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '8780e330-403f-4ce0-8cb0-c23b82ab4be0',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: 'c226b98e-bace-4211-b157-dea479b34ffa',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: 'a4c319e0-4230-4c6a-adf9-00c34e8528f3',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/mp4',
                      uuid: '2222fed3-125d-4388-adb4-1fb90cc93453',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '4889c703-6d9e-4ea4-b725-747e3afdeeb9',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-10',
                      uuid: 'cc054cb4-b522-4783-beba-2112fe76db81',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: 'ea4f5e21-b664-4f9b-94a4-6a1be0c23577',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'originalUri',
                  value: [
                    {
                      value:
                        's3://AKIA5ZS4U72YCBCXNEGT:_VSENC__VePlLp3sWU6qjnoUUFpul3eGZ4%2FkBeEw4AWoxQQ9V8hYu90UC1WItk0GEzOm0Ggpy3fh2MMR%2Fcw=@mam-storage-lab/vidispine02/video/VX-13.mp4?region=eu-west-1',
                      uuid: '68d070c6-7ece-4d69-8602-ed6787920dd5',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '3ad8223e-5870-42f9-88b7-35d03b145334',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'originalFilename',
                  value: [
                    {
                      value: 'AJE-TV-SIVAYT-240522-FINAL.mp4',
                      uuid: '1cb8476f-a9fa-464e-874b-ee994aea4911',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '8cbdda08-f642-412d-903e-ed2af7152c21',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: '76be1208-182c-4c24-8e50-1bbbbedfcab2',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '1502bab1-2f18-4ef6-9016-faf3f1468374',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: 'original',
                      uuid: '788bea52-83d3-4fb7-aac3-f5588050752c',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                    {
                      value: '__mp4',
                      uuid: '5a69894d-a86b-481d-9c67-355c744e1d04',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: 'fd4c9bce-7bed-4777-99db-56810f35ff4b',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-10;version=0/1250@PAL',
                      uuid: '539553ce-5a67-435f-9275-e8aa50c85a1e',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: '4b2cbbe5-e448-428c-8d50-e1720218cd55',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: '960da2ca-d377-4401-951b-eedf8181a87a',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: 'c941dec8-3492-4454-b815-4f9310abe628',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
                {
                  name: 'miljenko_ime',
                  value: [
                    {
                      value: 'dubravko',
                      uuid: '6a874f6b-1a82-44b9-a5cc-766196e449d8',
                      user: 'system',
                      timestamp: '2022-07-04T22:20:02.142+0000',
                      change: 'VX-185',
                    },
                  ],
                  uuid: 'cb64b87f-3c4d-4248-a4cb-88a115924bde',
                  user: 'system',
                  timestamp: '2022-07-04T22:20:02.142+0000',
                  change: 'VX-185',
                },
              ],
              group: [],
              start: '0@PAL',
              end: '115@PAL',
            },
          ],
        },
        shape: [],
        access: [],
        timespan: [
          {
            start: '-INF',
            end: '+INF',
          },
        ],
        externalId: [],
        id: 'VX-43',
        start: '-INF',
        end: '+INF',
      },
      {
        metadata: {
          revision: 'VX-178,VX-180,VX-179,VX-182,VX-181',
          timespan: [
            {
              field: [
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: '88fb6fe0-cbfe-4aef-9825-d741493d194f',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: 'd3d2fda3-e4d3-46c5-b577-9624cb1e3566',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: 'da704543-8242-4146-941a-679509a8b7bd',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '6dbc2cf5-8c2d-43dc-8c32-8bd25e589adf',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: '99517038-fd97-4743-a07e-ba71a919a1c3',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '50802004-e243-4e78-8bae-89e00625ff79',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '138.042633',
                      uuid: '93ad3614-b01e-4d4a-9978-46874c06b2ae',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '4f534b01-9517-47ee-852a-cf4163d71857',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '138042633@1000000',
                      uuid: 'b94e765e-7730-49dc-938b-7f12c9722c0d',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '11d5fa62-1b1a-4977-99e6-e9b8232af8aa',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: 'f37ae9f9-5c0c-4193-be82-8704952d0577',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '1298539d-6aa3-4626-898a-5fb351a00f41',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: '8f5e2c5b-3e44-4dd7-8214-d4042814fcaf',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '8225aaa2-2600-4993-b3c6-f4e94261876e',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/mp4',
                      uuid: '214d086a-3b21-41c1-95d1-92196bdf7e20',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '2a410ee6-610d-485a-8be5-776e27333e5b',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-39',
                      uuid: '85ab5f54-d269-4e1e-a900-55b29dd84a5b',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '842b0d4a-7d94-4aa3-9d19-aec22733e87d',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: '28f4ac93-5ccb-454e-91ae-bed242afc628',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '7bdb1e56-727b-43b9-9560-184f918420f6',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'originalFilename',
                  value: [
                    {
                      value: 'StarWarsTC25V042.mp4',
                      uuid: '408a40cf-980c-4389-aa66-80ef095c342e',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: 'd6675a9b-20e3-4982-99f3-9315b6154674',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: '__mp4',
                      uuid: 'd8f06dc8-f728-4562-b1ee-69be2ed3ec58',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                    {
                      value: 'original',
                      uuid: '0a6591a8-04c1-40d4-b1ae-5b4fd9ef2458',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '65892e10-2670-4292-b1b8-51e191574187',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-39;version=0/1750@PAL',
                      uuid: 'bff46702-1074-4c4a-8439-28415c58765e',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '3ffca23b-cc64-46ee-a319-1f69f3d15475',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: 'a861fc79-278a-4362-976d-dcf70fc07523',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: 'def43161-4a9e-4983-a17e-0cd0dcfd06c2',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'StarWarsTC25V042.mp4',
                      uuid: '93af9479-fd33-42b7-be2e-cba166d0f562',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '0d4e4205-4187-4411-8d15-afec4adba324',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'cct',
                  value: [
                    {
                      value: 'Entertainment',
                      uuid: 'd3178f8b-e614-4fee-82d2-bd851286c67d',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '4f63235f-9e86-4107-8368-9ff11d8492a6',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-02T20:38:56.160Z',
                      uuid: 'b219e035-46a8-4251-9579-67be7681a58b',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.574+0000',
                      change: 'VX-180',
                    },
                  ],
                  uuid: '8d65e963-796e-4ecf-aaeb-ad4b6b49a152',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.574+0000',
                  change: 'VX-180',
                },
              ],
              group: [],
              start: '0@PAL',
              end: '115@PAL',
            },
            {
              field: [
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: 'original',
                      uuid: 'f5990495-aac0-4079-9a6e-654133944bd7',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.830+0000',
                      change: 'VX-181',
                    },
                  ],
                  uuid: 'daf22812-892a-42f2-85b8-7472e1b20d70',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.830+0000',
                  change: 'VX-181',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-42;version=0/0@50',
                      uuid: 'bc9c9e80-e03a-4484-ae49-d2561c7148d8',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.830+0000',
                      change: 'VX-181',
                    },
                  ],
                  uuid: 'a863a248-606d-4bd0-95d3-014ac82c58be',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.830+0000',
                  change: 'VX-181',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: 'ff3ef570-5035-49d7-b0df-6d78cdcb388e',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.830+0000',
                      change: 'VX-181',
                    },
                  ],
                  uuid: '504cad68-f294-4ef9-b207-2a88765f24c2',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.830+0000',
                  change: 'VX-181',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: '2f99ddcb-17d4-4ca1-8bd6-efda67c5d4f2',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: '36cd36da-bef4-42c6-8bdf-2aa544453511',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: 'fdc31ffd-8df9-47de-8164-f3203087943c',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: '68dbb0f9-352b-49e4-b528-b39780ee4a9b',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: '78ea0720-ee97-4f1e-a9f1-7da90e56a3cb',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: 'f75c9473-cc41-4613-a13d-fa89df635067',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'startTimeCode',
                  value: [
                    {
                      value: '35@PAL',
                      uuid: '2bdee5eb-1364-4f8e-91bb-07af30e0b0a9',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: '19871957-1220-41ce-99f2-48ecef5b9834',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'startSeconds',
                  value: [
                    {
                      value: '1.4',
                      uuid: '94e9877d-196c-482a-a8bf-c8e1e5f856e2',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: '423de105-c938-4855-93ab-5a8fcc699372',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '4.8',
                      uuid: '4a42591f-3fae-47a1-8f3e-62c17fb45d07',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: '9a614d89-7c69-4afd-8a07-3c910ccda144',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '4800000@1000000',
                      uuid: '5116a66d-dc6e-49c5-a8bd-5a9f501b17f7',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: '8a67395e-a5db-487a-97a9-3895c4648218',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: '65f5f7b1-12bc-40cb-b221-8eeea01eb86d',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: '5dd96547-f956-4a7b-b4fe-95ca6d448a8d',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: '5241d6a7-bcc5-4020-86cc-6341291c2c18',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: 'e542eb47-9b44-42aa-bea1-25037e09e2da',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/quicktime',
                      uuid: 'ebb7eccd-3d0a-4e57-a7e0-a1ed5f31af59',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: '25fc5cc6-dcb2-4ad8-a076-ce8007f15f5a',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-42',
                      uuid: 'e660f3e8-3096-4433-84af-50f83360aa50',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: '664bc4af-f295-4370-b8cb-43f7e60fb39a',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: 'a8d3104b-dd31-4a8b-a33f-311db4ec231a',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:43.890+0000',
                      change: 'VX-182',
                    },
                  ],
                  uuid: '369f79db-a198-444e-bd39-7b23c71708fd',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:43.890+0000',
                  change: 'VX-182',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'Copy 3 of VX-39',
                      uuid: 'ce782532-baf5-4899-9307-e7874e4fe25f',
                      user: 'admin',
                      timestamp: '2022-07-03T12:01:27.181+0000',
                      change: 'VX-178',
                    },
                  ],
                  uuid: 'e8e9c154-094f-4ff3-9918-5b189473e1ba',
                  user: 'admin',
                  timestamp: '2022-07-03T12:01:27.181+0000',
                  change: 'VX-178',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-03T12:01:27.166Z',
                      uuid: 'fe88025d-876a-4c02-8cdb-602019772fc9',
                      user: 'system',
                      timestamp: '2022-07-03T12:01:27.616+0000',
                      change: 'VX-179',
                    },
                  ],
                  uuid: '89ac922f-7084-4574-91e7-5e33f1408d1b',
                  user: 'system',
                  timestamp: '2022-07-03T12:01:27.616+0000',
                  change: 'VX-179',
                },
                {
                  name: '__user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: 'user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__owner',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__metadata_last_modified',
                  value: [
                    {
                      value: '2022-07-03T12:01:43.890Z',
                    },
                  ],
                },
                {
                  name: '__placeholder_shape_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shape_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-42',
                    },
                  ],
                },
                {
                  name: '__version_count',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__version',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shapetag_original_hash',
                  value: [
                    {
                      value: 'e9285d0c0b8272d6edc3f61bd60f9297a971c1d9',
                    },
                  ],
                },
                {
                  name: '__shape_last_added',
                  value: [
                    {
                      value: '2022-07-03T12:01:27.727Z',
                    },
                  ],
                },
                {
                  name: '__storage_original',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage_original_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storagegroup_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__sequence_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__ancestor_collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
              ],
              group: [],
              start: '-INF',
              end: '+INF',
            },
          ],
        },
        shape: [],
        access: [],
        timespan: [
          {
            start: '-INF',
            end: '+INF',
          },
        ],
        externalId: [],
        id: 'VX-42',
        start: '-INF',
        end: '+INF',
      },
      {
        metadata: {
          revision: 'VX-174,VX-173,VX-176,VX-175,VX-177',
          timespan: [
            {
              field: [
                {
                  name: 'title',
                  value: [
                    {
                      value: 'Copy 2 of VX-39',
                      uuid: '8bbb00c6-50d6-4180-8c2c-59f899597101',
                      user: 'admin',
                      timestamp: '2022-07-03T11:57:26.648+0000',
                      change: 'VX-173',
                    },
                  ],
                  uuid: '5e770904-716f-44c8-9be2-280309d9c904',
                  user: 'admin',
                  timestamp: '2022-07-03T11:57:26.648+0000',
                  change: 'VX-173',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-03T11:57:26.630Z',
                      uuid: 'e95408da-889b-4bb7-bcb1-000a0720f046',
                      user: 'system',
                      timestamp: '2022-07-03T11:57:26.738+0000',
                      change: 'VX-174',
                    },
                  ],
                  uuid: '715b8349-c93a-44e2-aae3-7d097e9e73bc',
                  user: 'system',
                  timestamp: '2022-07-03T11:57:26.738+0000',
                  change: 'VX-174',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: 'original',
                      uuid: '00db89d3-023d-4ca6-b068-35a7fc6d060c',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.744+0000',
                      change: 'VX-176',
                    },
                  ],
                  uuid: 'd049861c-7c8b-4145-982e-d84a9071dbc3',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.744+0000',
                  change: 'VX-176',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-41;version=0/0@50',
                      uuid: 'e57edf36-023d-4c05-92f2-698bacde6ae9',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.744+0000',
                      change: 'VX-176',
                    },
                  ],
                  uuid: 'c4f66c5c-0730-427f-89aa-6bc2aefd62b9',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.744+0000',
                  change: 'VX-176',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: 'ad417326-7f81-46ea-b8dc-d78fa5f43147',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.744+0000',
                      change: 'VX-176',
                    },
                  ],
                  uuid: '478a7fad-7562-4de6-a1bf-83b0b89b2edd',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.744+0000',
                  change: 'VX-176',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: '94c6b8fd-1bf3-4fd1-9646-a24c8e380e3b',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: 'f9f69dd0-f420-4b9d-a7aa-426a787fbb51',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: 'fc81f065-3b31-414f-9ce2-5e1c89676d9d',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: '1688fd73-2b44-4a1b-964d-b114c5a0c72f',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: 'f0f6ea87-c3f7-4279-a0ab-6d59c4b1c0a8',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: '122b9537-8fca-412a-82c2-775897cd227f',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: 'startTimeCode',
                  value: [
                    {
                      value: '35@PAL',
                      uuid: 'f032e38c-ae7e-4980-b8ce-c61324aa552f',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: '5c9b268d-347f-4d4c-b3b1-850fb90564e8',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: 'startSeconds',
                  value: [
                    {
                      value: '1.4',
                      uuid: 'fd2b3ad9-7ed9-41cb-90c6-f05af7ca3c1c',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: '50b5515f-ffbb-4b09-84ee-a336a1307ba7',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '4.8',
                      uuid: '2617a57d-a314-4653-9036-486b5f1ddf6a',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: '878a3ba4-c1e2-4f05-8552-f2fdc309e0e9',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '4800000@1000000',
                      uuid: '3ba64a8e-477f-4ef7-ad3a-236866b9c755',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: '00fa0d1c-01db-4801-9ad6-8dc65dbe287e',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: 'a8b8dd51-4db8-4506-8ea8-e269af7e074b',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: 'c25ea6f5-05cc-4412-8c22-ae1e56e71801',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: '8562bf1d-0f42-4da6-ba6a-6313c51ac048',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: '116ede0e-5fe4-407e-bc97-881bd83c5b72',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/quicktime',
                      uuid: 'f7230438-b0f0-4c98-8675-928863638e5e',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: 'fd6a0307-3f2b-4f85-89dd-4801f5fd4f0f',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-41',
                      uuid: '3683684e-3c93-4273-a61e-99c6029090b2',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: 'd0d710a5-4d3c-407b-8b5e-27754c985a73',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: 'd9cea29f-8635-49d1-83fe-ce0abf46804f',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.837+0000',
                      change: 'VX-177',
                    },
                  ],
                  uuid: '01d1345f-20b4-4eae-b1fb-93c527b4017a',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.837+0000',
                  change: 'VX-177',
                },
                {
                  name: '__user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: 'user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__owner',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__metadata_last_modified',
                  value: [
                    {
                      value: '2022-07-03T11:59:36.837Z',
                    },
                  ],
                },
                {
                  name: '__placeholder_shape_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shape_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-41',
                    },
                  ],
                },
                {
                  name: '__version_count',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__version',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shapetag_original_hash',
                  value: [
                    {
                      value: 'bad9932624ef78d365cc8314a2ebe7d76bd794a1',
                    },
                  ],
                },
                {
                  name: '__shape_last_added',
                  value: [
                    {
                      value: '2022-07-03T11:57:26.838Z',
                    },
                  ],
                },
                {
                  name: '__storage_original',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage_original_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storagegroup_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__sequence_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__ancestor_collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
              ],
              group: [],
              start: '-INF',
              end: '+INF',
            },
            {
              field: [
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-39',
                      uuid: '279977fe-3457-4b9e-863f-a6a01af30baa',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: 'aaccd3ea-fdb9-4e15-9eca-b1f8cfe20c45',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: '69f6ba8e-78d5-4af1-a7a6-94389cf22a6b',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: 'fbf4540e-4208-4ad3-8985-5f5204893ddc',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'originalFilename',
                  value: [
                    {
                      value: 'StarWarsTC25V042.mp4',
                      uuid: '808a9b54-db99-4e41-a3ee-134c687e106f',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: '406efe65-79fc-45c9-bb55-3623b538af43',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: 'original',
                      uuid: '4e53da97-cec8-4cd1-8c7d-5125a9223db8',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                    {
                      value: '__mp4',
                      uuid: '2c7d5e12-a526-43a9-96c0-6a9d65d98f02',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: '90657073-c40b-4c3a-84f5-aa6061c5c6a6',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-39;version=0/1750@PAL',
                      uuid: 'c4623902-e754-4f16-9145-3cc0acc93809',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: '320e98d6-6882-4472-b978-b617e5dfc8e6',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: '0112b9ea-9092-4409-863a-7196a64c9217',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: '3510ccaf-c78b-4594-96d9-50f8ae136728',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'StarWarsTC25V042.mp4',
                      uuid: '2ea15b3f-d1cf-4464-9638-f00d0fb3ba64',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: 'e6941900-3f26-41a9-840f-24fa1445e16e',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'cct',
                  value: [
                    {
                      value: 'Entertainment',
                      uuid: 'e7cfda09-56c8-4584-9f3f-36d6accac0c8',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: 'bd75b9c3-91d3-4f3f-acaa-f523c1c6ae5b',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-02T20:38:56.160Z',
                      uuid: '79844dde-323e-4e2a-ba98-fea1e9d72170',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: 'b7fbfdd6-f7e7-45a0-ab9e-406e96383569',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: 'ff843967-e71d-4b2b-aca4-5601d40028c3',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: 'a096ba6c-5445-44b7-82d9-c050b58baaa7',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: '2e7fcbf4-03df-44c8-a954-b4ff72d63b71',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: '14fc7ff8-3759-4e57-90df-dfd7893f42b9',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: 'b2b30850-daa0-438b-911f-51d4f7891200',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: '75ab96c6-aa2f-475a-a575-32732224008a',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '138.042633',
                      uuid: '6382ac62-b88b-43c1-81c0-c34ea906542a',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: '454a8d64-125e-4881-81c2-663e66bf2475',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '138042633@1000000',
                      uuid: '52576744-32a8-4d90-81ed-af0d5ccab6d8',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: '8f1f938f-2c2a-44a5-b669-5a683a115a57',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: 'aed396ea-627f-4b03-a558-6a0b450eb513',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: '9d527de6-98d1-4891-a920-5df51634b399',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: '92121064-7813-4690-a2ba-a56c42964edb',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: '1c71daf8-d1a0-4f9c-a63d-920727e66456',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/mp4',
                      uuid: '1a45feed-d3f5-4699-8328-d1eb1876c7da',
                      user: 'system',
                      timestamp: '2022-07-03T11:59:36.474+0000',
                      change: 'VX-175',
                    },
                  ],
                  uuid: '3bacdfeb-edbc-4736-9f01-e213428de7a9',
                  user: 'system',
                  timestamp: '2022-07-03T11:59:36.474+0000',
                  change: 'VX-175',
                },
              ],
              group: [],
              start: '0@PAL',
              end: '115@PAL',
            },
          ],
        },
        shape: [],
        access: [],
        timespan: [
          {
            start: '-INF',
            end: '+INF',
          },
        ],
        externalId: [],
        id: 'VX-41',
        start: '-INF',
        end: '+INF',
      },
      {
        metadata: {
          revision: 'VX-171,VX-168,VX-167,VX-170,VX-169',
          timespan: [
            {
              field: [
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: '26e5dafb-c314-4b74-aa52-4dfa9287689a',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: '16883fa2-b603-4558-8ddc-7d3507b2b169',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: 'startTimeCode',
                  value: [
                    {
                      value: '35@PAL',
                      uuid: '0833fd40-4ed2-47e8-b0f5-dc99cb93dfb6',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: '014582ed-a4c1-4921-810e-f47b065cac7b',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: 'startSeconds',
                  value: [
                    {
                      value: '1.4',
                      uuid: 'fcce11ab-0f8d-455b-bf09-b4dcca14336b',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: '622b9ff1-fbc6-448f-83a5-b3c8eb512003',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '4.8',
                      uuid: 'f01060cd-11ae-4731-9e45-78e16a225124',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: '1e86e91d-b47f-427e-8655-a0309cffe629',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '4800000@1000000',
                      uuid: '7ff05eaf-0802-497f-9ff8-9b3c6caca07e',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: '1db21ee5-3e5c-4adf-9368-947a94fece0d',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: '103d9855-6a44-4736-b9a9-c8d150a043dd',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: '836fe2c1-52e8-40ad-8c10-058cf0527e20',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: '6c3fd3d5-d123-46d8-82e2-ae1fe5482f89',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: '055f947f-e8ff-46ca-a8ed-373024b4a3c9',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/quicktime',
                      uuid: 'd7db2994-509a-4063-88b2-a197aa35dfea',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: '9a46ec29-39da-401b-9b45-5d4a1f66b645',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-40',
                      uuid: '7c2075d1-b8e4-420e-be0b-4bf93d20b765',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: '15ae5ada-ce9b-466c-942d-2721bee9222c',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: '8962c89a-c165-4808-ad29-896dd9d1933b',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: 'e12d1ee4-b3e4-4dfc-9592-713fe48a1231',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'Copy of VX-39',
                      uuid: '1a135f06-f57e-46da-bf52-a529cdda97d0',
                      user: 'admin',
                      timestamp: '2022-07-02T20:48:04.253+0000',
                      change: 'VX-167',
                    },
                  ],
                  uuid: 'b138b314-107d-4198-ab22-186867772088',
                  user: 'admin',
                  timestamp: '2022-07-02T20:48:04.253+0000',
                  change: 'VX-167',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-02T20:48:04.237Z',
                      uuid: 'be3c944d-aada-4a30-84dc-37e5c36e35b7',
                      user: 'system',
                      timestamp: '2022-07-02T20:48:04.339+0000',
                      change: 'VX-168',
                    },
                  ],
                  uuid: 'bc1dddbd-7fdc-4f5e-8c24-905ee7f4b41b',
                  user: 'system',
                  timestamp: '2022-07-02T20:48:04.339+0000',
                  change: 'VX-168',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: 'original',
                      uuid: '65af9857-d7a4-4ce1-9347-1c8c01bb0876',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.762+0000',
                      change: 'VX-170',
                    },
                  ],
                  uuid: '1ff2ebec-d28d-4140-b816-66e197b9fdb8',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.762+0000',
                  change: 'VX-170',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-40;version=0/0@50',
                      uuid: 'a1828060-20e1-4cc8-b9c6-f0812d447869',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.762+0000',
                      change: 'VX-170',
                    },
                  ],
                  uuid: '3d821822-12c0-466f-98d2-963a3955b089',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.762+0000',
                  change: 'VX-170',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: 'ab72f1b0-d4c2-4b80-bd91-e5704f9d868f',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.762+0000',
                      change: 'VX-170',
                    },
                  ],
                  uuid: '6c6f2b96-62f7-4d88-964b-474513c073cf',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.762+0000',
                  change: 'VX-170',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: '89b3c0ba-9039-4a23-9e3b-e988a01532b1',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: '86cc34d3-dded-490c-b494-3d82b0ed1ece',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: 'dc007e81-594d-4b12-8013-6b44781d922c',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.828+0000',
                      change: 'VX-171',
                    },
                  ],
                  uuid: '67046b08-df54-46d1-a2c9-f7592ce612c6',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.828+0000',
                  change: 'VX-171',
                },
                {
                  name: '__user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: 'user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__owner',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__metadata_last_modified',
                  value: [
                    {
                      value: '2022-07-02T20:49:59.828Z',
                    },
                  ],
                },
                {
                  name: '__placeholder_shape_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shape_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-40',
                    },
                  ],
                },
                {
                  name: '__version_count',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__version',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shapetag_original_hash',
                  value: [
                    {
                      value: '7b0c8e875ba654fc6c1122cf8d7b0f6f72a8889f',
                    },
                  ],
                },
                {
                  name: '__shape_last_added',
                  value: [
                    {
                      value: '2022-07-02T20:48:04.437Z',
                    },
                  ],
                },
                {
                  name: '__storage_original',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage_original_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storagegroup_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__sequence_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__ancestor_collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
              ],
              group: [],
              start: '-INF',
              end: '+INF',
            },
            {
              field: [
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-39',
                      uuid: '6541b711-9d3a-49ff-b3e4-5f8a9f618ff3',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: '4cd1ddf2-b0b0-4ab0-9d1f-0307ae9f238e',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: '56ed373f-4148-47f9-896f-2ac4e6e034ad',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: '4ba331fc-753b-404e-8226-c7a8c9458b02',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'originalFilename',
                  value: [
                    {
                      value: 'StarWarsTC25V042.mp4',
                      uuid: '3e8e9d3e-deb2-4eca-9d1d-66a73f37ada3',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: 'fc2831ea-555f-4513-8434-5834dcefe977',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: '__mp4',
                      uuid: '909f793e-3ab9-4c10-8960-6454229dbef8',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                    {
                      value: 'original',
                      uuid: '6d575d70-97b5-4606-83ca-da966809cf0d',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: '3d532728-6f3f-4ef4-8be4-1c39c3f59465',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-39;version=0/1750@PAL',
                      uuid: '08949fc7-158f-4981-a0a1-102e2f10cb9f',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: '1bf0644e-9f80-4f84-8fc2-6df0edd8a13c',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: '98e93f4e-bd23-4461-b6cb-eb18675e4c4d',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: '29d97927-1f8c-44bf-9948-89bd7d6745b1',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-02T20:38:56.160Z',
                      uuid: 'd699cd54-6633-46a9-a9a4-c6a3145be52f',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: 'dbd229b6-a5b6-47d9-963e-0c28c16cbf23',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: 'e675ef85-caef-422f-956f-25e496382d88',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: '87a8a394-3e9a-4134-8437-62064ddcf0f9',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: '487a4fc5-7475-42c4-8f85-526fd6e364fc',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: '737c8ebd-6a4f-4e6f-98d4-c99fcc26da81',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: '14205443-6f94-46a7-b22a-32a6302f889b',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: 'b769ac94-dad7-4a21-807b-1c9391940e9c',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '138.042633',
                      uuid: '29095213-4fe9-4b13-9aec-8fe30df482fd',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: '81d29f19-31cb-443a-b7ae-c9f0bf6c87fa',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '138042633@1000000',
                      uuid: '51b940fa-1e25-4783-abf5-a6744aadb09e',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: 'c2db495c-0633-4018-81a0-2e65e9d4618a',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: 'a27ad85e-44a7-42a3-ab6e-8506febb6eb3',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: 'd346063f-34b9-471d-bcf3-a65d2704d663',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: '0aa745ea-eaa9-4093-a17e-d5ba3dca372e',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: 'd1c465a6-b9a5-4eb6-9c2e-c20ad4a022b5',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/mp4',
                      uuid: 'e60b350d-4ed2-466e-a773-815b986994aa',
                      user: 'system',
                      timestamp: '2022-07-02T20:49:59.535+0000',
                      change: 'VX-169',
                    },
                  ],
                  uuid: 'f4548e31-3476-4959-ae04-09fbbf13e4e8',
                  user: 'system',
                  timestamp: '2022-07-02T20:49:59.535+0000',
                  change: 'VX-169',
                },
              ],
              group: [],
              start: '0@PAL',
              end: '115@PAL',
            },
          ],
        },
        shape: [],
        access: [],
        timespan: [
          {
            start: '-INF',
            end: '+INF',
          },
        ],
        externalId: [],
        id: 'VX-40',
        start: '-INF',
        end: '+INF',
      },
      {
        metadata: {
          revision: 'VX-172,VX-162,VX-164,VX-166,VX-165',
          timespan: [
            {
              field: [
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-39',
                      uuid: 'fd262fc1-869b-46b8-a31f-311bede96137',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.431+0000',
                      change: 'VX-164',
                    },
                  ],
                  uuid: '455319bf-9a80-4bde-bd9e-91ddc039f762',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.431+0000',
                  change: 'VX-164',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: 'd539fd2a-f198-4719-8f8b-1d6202d9f324',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.431+0000',
                      change: 'VX-164',
                    },
                  ],
                  uuid: '18d782ee-0b67-46a2-9312-b6d8db2b45d6',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.431+0000',
                  change: 'VX-164',
                },
                {
                  name: 'originalFilename',
                  value: [
                    {
                      value: 'StarWarsTC25V042.mp4',
                      uuid: 'f1b24f6e-c27c-487c-a967-a9e9e765385f',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.468+0000',
                      change: 'VX-165',
                    },
                  ],
                  uuid: '059d5a1e-5285-4663-84c9-39b06988aea7',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.468+0000',
                  change: 'VX-165',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: '__mp4',
                      uuid: '870edf02-a0c0-4d13-aa92-5de5c9887270',
                      user: 'system',
                      timestamp: '2022-07-02T20:41:09.765+0000',
                      change: 'VX-166',
                    },
                    {
                      value: 'original',
                      uuid: '3851c9aa-d265-4c11-bf01-ca862dc3dc8c',
                      user: 'system',
                      timestamp: '2022-07-02T20:41:09.765+0000',
                      change: 'VX-166',
                    },
                  ],
                  uuid: '1a5ca92f-13de-404f-b122-d2c4bfdc3519',
                  user: 'system',
                  timestamp: '2022-07-02T20:41:09.765+0000',
                  change: 'VX-166',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-39;version=0/1750@PAL',
                      uuid: '36b1974e-573a-4873-a214-662bdae4c501',
                      user: 'system',
                      timestamp: '2022-07-02T20:41:09.765+0000',
                      change: 'VX-166',
                    },
                  ],
                  uuid: '13a147f8-0c1a-4b1d-868c-4730a749568d',
                  user: 'system',
                  timestamp: '2022-07-02T20:41:09.765+0000',
                  change: 'VX-166',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: '2de30304-d8bd-4a62-ab1e-a113e752493c',
                      user: 'system',
                      timestamp: '2022-07-02T20:41:09.765+0000',
                      change: 'VX-166',
                    },
                  ],
                  uuid: 'af9b3cf1-973d-49f5-a8e6-fadbfccf0ccc',
                  user: 'system',
                  timestamp: '2022-07-02T20:41:09.765+0000',
                  change: 'VX-166',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'StarWarsTC25V042.mp4',
                      uuid: '21897fc2-044b-4b7e-bc92-6809b712d07e',
                      user: 'admin',
                      timestamp: '2022-07-03T11:48:15.288+0000',
                      change: 'VX-172',
                    },
                  ],
                  uuid: '02a2a360-96d9-4fe8-80bf-0725b0ff4981',
                  user: 'admin',
                  timestamp: '2022-07-03T11:48:15.288+0000',
                  change: 'VX-172',
                },
                {
                  name: 'cct',
                  value: [
                    {
                      value: 'Entertainment',
                      uuid: 'b1ef9f8a-3477-401c-b74a-61d07500b6e2',
                      user: 'admin',
                      timestamp: '2022-07-03T11:48:15.288+0000',
                      change: 'VX-172',
                    },
                  ],
                  uuid: '213fe85d-9492-4e81-bef0-268aa6b5fc62',
                  user: 'admin',
                  timestamp: '2022-07-03T11:48:15.288+0000',
                  change: 'VX-172',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-02T20:38:56.160Z',
                      uuid: '1d40f383-e553-4099-a6e2-397b988e25b7',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.256+0000',
                      change: 'VX-162',
                    },
                  ],
                  uuid: 'd4486ff8-c649-4d7f-9cd0-9d16ffc959cf',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.256+0000',
                  change: 'VX-162',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: 'ce598a28-a49f-48ae-b478-1ae1e4f29677',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.431+0000',
                      change: 'VX-164',
                    },
                  ],
                  uuid: 'c9f03727-506d-4626-982e-996daa9c8ccc',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.431+0000',
                  change: 'VX-164',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: '1b448b2d-fad7-4eb7-8be9-e9196348d979',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.431+0000',
                      change: 'VX-164',
                    },
                  ],
                  uuid: 'cf1c8ce5-2906-424f-ac06-0a87409fc671',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.431+0000',
                  change: 'VX-164',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: '478aaba4-0727-49dd-9eb9-689a59a80364',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.431+0000',
                      change: 'VX-164',
                    },
                  ],
                  uuid: '65e152d7-678d-4fd7-a1b5-12fc27c740c5',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.431+0000',
                  change: 'VX-164',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '138.042633',
                      uuid: 'a081bcdf-d9cb-4e5b-bd6d-4469c2fa3881',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.431+0000',
                      change: 'VX-164',
                    },
                  ],
                  uuid: 'e6523a41-c3d9-46c1-9244-2be135d30c2e',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.431+0000',
                  change: 'VX-164',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '138042633@1000000',
                      uuid: '31356c56-18ae-4121-b3fe-aefff13703c7',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.431+0000',
                      change: 'VX-164',
                    },
                  ],
                  uuid: 'bb128ea5-82d1-43b6-820b-12d9da34b16e',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.431+0000',
                  change: 'VX-164',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: 'b81ebc36-608e-4dfc-8fb2-f1125fce2c0f',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.431+0000',
                      change: 'VX-164',
                    },
                  ],
                  uuid: '7a26b9ce-a598-44b2-9a42-5131c86bc631',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.431+0000',
                  change: 'VX-164',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: '7c90df0a-b416-417d-b03c-609ce69b1b87',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.431+0000',
                      change: 'VX-164',
                    },
                  ],
                  uuid: '48a53950-bae9-422e-8f40-9d121c32cbc3',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.431+0000',
                  change: 'VX-164',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/mp4',
                      uuid: '308457c6-9fc9-49d9-afd1-5f5bae2f14c5',
                      user: 'system',
                      timestamp: '2022-07-02T20:38:56.431+0000',
                      change: 'VX-164',
                    },
                  ],
                  uuid: 'd58242dd-d6ba-4c11-9d44-e26a5ccc4454',
                  user: 'system',
                  timestamp: '2022-07-02T20:38:56.431+0000',
                  change: 'VX-164',
                },
                {
                  name: '__user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: 'user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__owner',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__metadata_last_modified',
                  value: [
                    {
                      value: '2022-07-03T11:48:15.288Z',
                    },
                  ],
                },
                {
                  name: '__placeholder_shape_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shape_size',
                  value: [
                    {
                      value: '2',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-39',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-38',
                    },
                  ],
                },
                {
                  name: '__version_count',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__version',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shapetag___mp4_hash',
                  value: [
                    {
                      value: '0041a509f12c8bbb2a677d89abd79b7b92d63039',
                    },
                  ],
                },
                {
                  name: '__shapetag_original_hash',
                  value: [
                    {
                      value: 'd5d6824dbec103084d0ac7bcdb4a761f98723c14',
                    },
                  ],
                },
                {
                  name: '__shape_last_added',
                  value: [
                    {
                      value: '2022-07-02T20:38:56.587Z',
                    },
                  ],
                },
                {
                  name: '__storage___mp4',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage___mp4_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_original',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage_original_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storagegroup_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__sequence_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__ancestor_collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
              ],
              group: [],
              start: '-INF',
              end: '+INF',
            },
          ],
        },
        shape: [],
        access: [],
        timespan: [
          {
            start: '-INF',
            end: '+INF',
          },
        ],
        externalId: [],
        id: 'VX-39',
        start: '-INF',
        end: '+INF',
      },
      {
        metadata: {
          revision: 'VX-114,VX-116,VX-115,VX-118,VX-117',
          timespan: [
            {
              field: [
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: 'mov,mp4,m4a,3gp,3g2,mj2',
                      uuid: 'cf952548-3df0-401c-ba4d-f7b2ead35f4b',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: 'aa85bd73-06b5-4a0e-938b-94014ffb7d11',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: 'h264',
                      uuid: '5aacb51d-2945-471f-9b68-243dd3513a18',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: '992f71e1-68d0-4e34-a5d5-f1c8238c90de',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: 'aac',
                      uuid: '5b77cf7a-f107-4923-afe1-478ced97b1be',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: 'c8c6c60c-9adc-4234-a275-6f65d43166d8',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'durationSeconds',
                  value: [
                    {
                      value: '154.204',
                      uuid: 'cd9ca4d1-903a-46b1-b377-ebb9dc82e9c3',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: '2afda237-c7a8-4093-82df-13f6dee22ffb',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'durationTimeCode',
                  value: [
                    {
                      value: '154204000@1000000',
                      uuid: '352b405b-dc88-498c-81b2-e8908ce0a8a5',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: '684a1a9c-1fef-44f2-b179-e526bb0ee8ef',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'originalWidth',
                  value: [
                    {
                      value: '1920',
                      uuid: 'd8ccd56f-099d-4fc0-96be-0db9e80ba497',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: 'a6c886be-a51c-4eee-b841-2bf5312e7270',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'originalHeight',
                  value: [
                    {
                      value: '1080',
                      uuid: '59b9ca30-c942-4245-9c72-3613b9ba8ac2',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: '831d5158-cf70-42ef-9fc0-2bba047512b5',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/mp4',
                      uuid: '69d07c5f-2112-4b9e-b765-708af41cb524',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: '7c801501-7fdc-457e-929d-9c49d7828547',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-1',
                      uuid: '58e24dc3-6f79-438a-8c21-aa804aca6172',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: 'a4ff3001-be7d-4e89-9027-deef39008300',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'video',
                      uuid: 'a461b0fe-f262-4e86-abab-e6c16b270a55',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: 'fe86ab55-eb3b-423c-b4dd-7f0903345e1b',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'originalFilename',
                  value: [
                    {
                      value: 'StarWarsV041.mp4',
                      uuid: 'd89c6c77-e197-4e09-8a77-76172a732063',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: 'ea46f238-f2ee-418f-9e00-eab41cb2a23b',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: '__mp4',
                      uuid: '2dca092b-59d3-4252-8949-6bfeb8b04c39',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                    {
                      value: 'original',
                      uuid: 'b6429d42-bf31-467c-8bb3-11a03ff68fa2',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: '8a571d0e-72d1-4f39-b2bd-7e5ec2fec08b',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-1;version=0/1750@PAL',
                      uuid: 'db93293c-bf7d-49d4-9ada-fb17be3d1034',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: 'c64a771d-f81f-42d7-a92d-9525a04008ed',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: 'd10bf3dd-fe5d-4882-b54b-69da3fb59648',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: '7b2d37f9-64c7-416e-9e9f-92183a029889',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-05-28T08:22:26.159Z',
                      uuid: 'cc7d8378-a430-47de-b780-f3df48a9ba77',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.376+0000',
                      change: 'VX-116',
                    },
                  ],
                  uuid: 'd5ea84df-27ae-4264-b8b6-724fe504df17',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.376+0000',
                  change: 'VX-116',
                },
              ],
              group: [],
              start: '0@PAL',
              end: '200@PAL',
            },
            {
              field: [
                {
                  name: 'shapeTag',
                  value: [
                    {
                      value: 'original',
                      uuid: '1f24913b-3ff8-4986-b91a-58a18f49deb3',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.595+0000',
                      change: 'VX-117',
                    },
                  ],
                  uuid: 'c7c30a0f-9910-4608-9301-769b1aa7c7cc',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.595+0000',
                  change: 'VX-117',
                },
                {
                  name: 'representativeThumbnail',
                  value: [
                    {
                      value: '/API/thumbnail/VX-2/VX-17;version=0/480480@48000',
                      uuid: 'e40a9215-9995-4ebb-8f42-2e946a518eee',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.595+0000',
                      change: 'VX-117',
                    },
                  ],
                  uuid: 'e3e1598f-b52d-4564-b348-ada784d952a9',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.595+0000',
                  change: 'VX-117',
                },
                {
                  name: 'representativeThumbnailNoAuth',
                  value: [
                    {
                      value: '/sample.jpg',
                      uuid: '284ac677-0ac1-4056-bc5f-6835ec50d23d',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.595+0000',
                      change: 'VX-117',
                    },
                  ],
                  uuid: '75b44c10-1c4b-41f6-8a92-733982d4b834',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.595+0000',
                  change: 'VX-117',
                },
                {
                  name: 'originalFormat',
                  value: [
                    {
                      value: '',
                      uuid: 'f97b47a0-1183-43b4-b72a-d063dbccb1b0',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.662+0000',
                      change: 'VX-118',
                    },
                  ],
                  uuid: '0690d206-5e2f-4b5e-9921-4ec0c55149b3',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.662+0000',
                  change: 'VX-118',
                },
                {
                  name: 'originalVideoCodec',
                  value: [
                    {
                      value: '',
                      uuid: 'd44d45e1-7749-4fc5-9cba-d670fc02b618',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.662+0000',
                      change: 'VX-118',
                    },
                  ],
                  uuid: '5e6d919d-fcfd-44c9-af39-3acc06633162',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.662+0000',
                  change: 'VX-118',
                },
                {
                  name: 'originalAudioCodec',
                  value: [
                    {
                      value: '',
                      uuid: 'e945f1e8-9e3b-4307-84ee-dd3c327a4bae',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.662+0000',
                      change: 'VX-118',
                    },
                  ],
                  uuid: '1b5f463b-9708-4566-b8ff-068f64dd4e05',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.662+0000',
                  change: 'VX-118',
                },
                {
                  name: 'mimeType',
                  value: [
                    {
                      value: 'video/quicktime',
                      uuid: '56f7508f-7f68-4c15-be73-796a909d5db9',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.662+0000',
                      change: 'VX-118',
                    },
                  ],
                  uuid: '32f1e134-00ad-4c2f-98c3-59bc62d0ad97',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.662+0000',
                  change: 'VX-118',
                },
                {
                  name: 'itemId',
                  value: [
                    {
                      value: 'VX-17',
                      uuid: 'd7a0ae42-5de2-42e1-a59e-d159cb5c1348',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.662+0000',
                      change: 'VX-118',
                    },
                  ],
                  uuid: '03bda488-7645-4942-a5ea-959bf1e3949b',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.662+0000',
                  change: 'VX-118',
                },
                {
                  name: 'mediaType',
                  value: [
                    {
                      value: 'data',
                      uuid: '1eac7899-564f-4c2a-81db-5b5460b75ddb',
                      user: 'system',
                      timestamp: '2022-07-02T11:16:53.662+0000',
                      change: 'VX-118',
                    },
                  ],
                  uuid: '239a398a-3ea5-4522-bbc1-5c2159558a73',
                  user: 'system',
                  timestamp: '2022-07-02T11:16:53.662+0000',
                  change: 'VX-118',
                },
                {
                  name: 'title',
                  value: [
                    {
                      value: 'Copy of VX-1',
                      uuid: '8bf16a04-12b6-4f67-8e99-86a6326c137e',
                      user: 'admin',
                      timestamp: '2022-07-02T11:14:11.782+0000',
                      change: 'VX-114',
                    },
                  ],
                  uuid: '7a8438c7-e285-47e4-a13b-6ec3b209e331',
                  user: 'admin',
                  timestamp: '2022-07-02T11:14:11.782+0000',
                  change: 'VX-114',
                },
                {
                  name: 'created',
                  value: [
                    {
                      value: '2022-07-02T11:14:11.766Z',
                      uuid: 'd24727e1-71c1-4928-a65f-deb93fc0a04b',
                      user: 'system',
                      timestamp: '2022-07-02T11:14:11.850+0000',
                      change: 'VX-115',
                    },
                  ],
                  uuid: '7ca3a017-755a-417b-a56c-8b745ab2b964',
                  user: 'system',
                  timestamp: '2022-07-02T11:14:11.850+0000',
                  change: 'VX-115',
                },
                {
                  name: '__user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: 'user',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__owner',
                  value: [
                    {
                      value: 'admin',
                    },
                  ],
                },
                {
                  name: '__metadata_last_modified',
                  value: [
                    {
                      value: '2022-07-02T11:16:53.662Z',
                    },
                  ],
                },
                {
                  name: '__placeholder_shape_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shape_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__shape',
                  value: [
                    {
                      value: 'VX-25',
                    },
                  ],
                },
                {
                  name: '__version_count',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__version',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__shapetag_original_hash',
                  value: [
                    {
                      value: '105711517e66697671fbec52937281992043886c',
                    },
                  ],
                },
                {
                  name: '__shape_last_added',
                  value: [
                    {
                      value: '2022-07-02T11:14:11.942Z',
                    },
                  ],
                },
                {
                  name: '__storage_original',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storage_original_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage_size',
                  value: [
                    {
                      value: '1',
                    },
                  ],
                },
                {
                  name: '__storage',
                  value: [
                    {
                      value: 'VX-1',
                    },
                  ],
                },
                {
                  name: '__storagegroup_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__sequence_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
                {
                  name: '__ancestor_collection_size',
                  value: [
                    {
                      value: '0',
                    },
                  ],
                },
              ],
              group: [],
              start: '-INF',
              end: '+INF',
            },
          ],
        },
        shape: [],
        access: [],
        timespan: [
          {
            start: '-INF',
            end: '+INF',
          },
        ],
        externalId: [],
        id: 'VX-17',
        start: '-INF',
        end: '+INF',
      },
    ],
    facet: [],
    suggestion: [],
    autocomplete: [],
  }
}

export const getFakeItem = () => {
  return {
    metadata: {
      revision: 'VX-252,VX-251,VX-254,VX-253',
      timespan: [
        {
          field: [
            {
              name: 'mimeType',
              value: [
                {
                  value: 'video/quicktime',
                  uuid: '838011ec-7ed3-48b7-b6ec-cf44dbc70710',
                  user: 'system',
                  timestamp: '2022-07-14T21:04:01.962+0000',
                  change: 'VX-254',
                },
              ],
              uuid: 'a4f15f8f-d292-4f24-a243-11724f50655f',
              user: 'system',
              timestamp: '2022-07-14T21:04:01.962+0000',
              change: 'VX-254',
            },
            {
              name: 'created',
              value: [
                {
                  value: '2022-07-14T21:01:54.376Z',
                  uuid: '6abf3bfc-19df-45b7-b727-2d9caf071b46',
                  user: 'system',
                  timestamp: '2022-07-14T21:01:54.481+0000',
                  change: 'VX-251',
                },
              ],
              uuid: '136565be-a399-47a7-b824-212cf852f90c',
              user: 'system',
              timestamp: '2022-07-14T21:01:54.481+0000',
              change: 'VX-251',
            },
            {
              name: 'durationSeconds',
              value: [
                {
                  value: '6.006',
                  uuid: '60ed975b-4ffb-4dc7-9dbc-ef3e872f3e53',
                  user: 'system',
                  timestamp: '2022-07-14T21:04:01.962+0000',
                  change: 'VX-254',
                },
              ],
              uuid: '79eb557a-536d-4f50-8ee5-cffdfd53ea0a',
              user: 'system',
              timestamp: '2022-07-14T21:04:01.962+0000',
              change: 'VX-254',
            },
            {
              name: 'user',
              value: [
                {
                  value: 'admin',
                },
              ],
            },
          ],
          group: [],
          start: '-INF',
          end: '+INF',
        },
        {
          field: [
            {
              name: 'created',
              value: [
                {
                  value: '2022-07-04T22:57:55.962Z',
                  uuid: '04503b65-d9c7-43fb-83fd-88302658c964',
                  user: 'system',
                  timestamp: '2022-07-14T21:04:01.496+0000',
                  change: 'VX-252',
                },
              ],
              uuid: '876bac0d-ff12-4e74-b967-1c1dbad4199e',
              user: 'system',
              timestamp: '2022-07-14T21:04:01.496+0000',
              change: 'VX-252',
            },
            {
              name: 'durationSeconds',
              value: [
                {
                  value: '102.101333',
                  uuid: '13942f9d-2948-46d4-9c6f-10a8e21eeec6',
                  user: 'system',
                  timestamp: '2022-07-14T21:04:01.496+0000',
                  change: 'VX-252',
                },
              ],
              uuid: '5cbbc3ac-f808-494a-8205-1eed7375226f',
              user: 'system',
              timestamp: '2022-07-14T21:04:01.496+0000',
              change: 'VX-252',
            },
            {
              name: 'mimeType',
              value: [
                {
                  value: 'video/mp4',
                  uuid: '7c32b0eb-6a40-46ea-86ba-a3ead1c02cde',
                  user: 'system',
                  timestamp: '2022-07-14T21:04:01.496+0000',
                  change: 'VX-252',
                },
              ],
              uuid: '41c81d5c-db85-4cf2-b7ee-51b234c4d73c',
              user: 'system',
              timestamp: '2022-07-14T21:04:01.496+0000',
              change: 'VX-252',
            },
            {
              name: 'originalFilename',
              value: [
                {
                  value: 'AJA-MM-TEST-111122-FINAL.mp4',
                  uuid: '48489758-f204-421f-84df-4fadd1001695',
                  user: 'system',
                  timestamp: '2022-07-14T21:04:01.496+0000',
                  change: 'VX-252',
                },
              ],
              uuid: 'c3efe736-2f1f-42aa-a708-9bf9a9c04891',
              user: 'system',
              timestamp: '2022-07-14T21:04:01.496+0000',
              change: 'VX-252',
            },
          ],
          group: [],
          start: '0@PAL',
          end: '115@PAL',
        },
      ],
    },
    thumbnails: {
      uri: ['http://localhost:6006/undefined/postersample.jpg'],
    },
    files: {
      uri: ['http://localhost:6006/sample.mov'],
    },
    shape: [
      {
        id: 'VX-60',
        created: '2022-07-14T21:01:54.625+0000',
        essenceVersion: 0,
        tag: ['original'],
        mimeType: ['video/quicktime'],
        containerComponent: {
          duration: {
            samples: 6006000,
            timeBase: {
              numerator: 1,
              denominator: 1000000,
            },
          },
          format: 'mov,mp4,m4a,3gp,3g2,mj2',
          firstSMPTETimecode: '00:00:01;12',
          startTimecode: 42,
          startTimestamp: {
            samples: 0,
            timeBase: {
              numerator: 1,
              denominator: 30000,
            },
          },
          roundedTimeBase: 30,
          dropFrame: true,
          timeCodeTimeBase: {
            numerator: 1001,
            denominator: 30000,
          },
          file: [
            {
              id: 'VX-72',
              path: 'VX-72.mov',
              uri: ['http://localhost:6006/sample.mov'],
              state: 'CLOSED',
              size: 8198531,
              hash: '4bdf9a37862add10644a45add14ae6a0f1f95958',
              timestamp: '2022-07-14T21:03:56.445+0000',
              refreshFlag: 1,
              storage: 'VX-1',
              metadata: {},
            },
          ],
          id: 'VX-151',
          metadata: [
            {
              key: 'creation_time',
              value: '2022-07-14T21:03:54.000000Z',
            },
            {
              key: 'componentOriginalFilename',
              value: 'VX-72.mov',
            },
            {
              key: 'drop_frame',
              value: 'true',
            },
            {
              key: 'major_brand',
              value: 'qt  ',
            },
            {
              key: 'rounded_time_base',
              value: '30',
            },
            {
              key: 'encoder',
              value: 'Lavf58.76.100',
            },
            {
              key: 'start_timecode',
              value: '42',
            },
            {
              key: 'compatible_brands',
              value: 'qt  ',
            },
            {
              key: 'minor_version',
              value: '512',
            },
          ],
        },
        audioComponent: [
          {
            channelCount: 2,
            channelLayout: 3,
            sampleFormat: 'AV_SAMPLE_FMT_FLTP',
            frameSize: 1024,
            file: [
              {
                id: 'VX-72',
                path: 'VX-72.mov',
                uri: ['http://localhost:6006/sample.mov'],
                state: 'CLOSED',
                size: 8198531,
                hash: '4bdf9a37862add10644a45add14ae6a0f1f95958',
                timestamp: '2022-07-14T21:03:56.445+0000',
                refreshFlag: 1,
                storage: 'VX-1',
                metadata: {},
              },
            ],
            id: 'VX-152',
            metadata: [
              {
                key: 'creation_time',
                value: '2022-07-14T21:03:54.000000Z',
              },
              {
                key: 'componentOriginalFilename',
                value: 'VX-72.mov',
              },
              {
                key: 'handler_name',
                value: 'SoundHandler',
              },
              {
                key: 'vendor_id',
                value: '[0][0][0][0]',
              },
            ],
            codec: 'aac',
            timeBase: {
              numerator: 1,
              denominator: 48000,
            },
            itemTrack: 'A1',
            essenceStreamId: 1,
            bitrate: 317375,
            numberOfPackets: 216,
            extradata: '1190',
            pid: 2,
            duration: {
              samples: 221184,
              timeBase: {
                numerator: 1,
                denominator: 48000,
              },
            },
            profile: 1,
            edl: {
              timeScale: {
                numerator: 1,
                denominator: 1000,
              },
              entry: [
                {
                  start: 0,
                  length: 4608,
                  mediaRate: 65536,
                },
              ],
            },
            startTimestamp: {
              samples: 0,
              timeBase: {
                numerator: 1,
                denominator: 48000,
              },
            },
          },
        ],
        videoComponent: [
          {
            resolution: {
              width: 1920,
              height: 1080,
            },
            pixelFormat: 'yuv420p',
            maxBFrames: 1,
            pixelAspectRatio: {
              horizontal: 1,
              vertical: 1,
            },
            fieldOrder: 'progressive',
            codecTimeBase: {
              numerator: 1001,
              denominator: 60000,
            },
            averageFrameRate: {
              numerator: 30000,
              denominator: 1001,
            },
            realBaseFrameRate: {
              numerator: 30000,
              denominator: 1001,
            },
            displayWidth: {
              numerator: 1920,
              denominator: 1,
            },
            displayHeight: {
              numerator: 1080,
              denominator: 1,
            },
            containerSAR: {
              horizontal: 1,
              vertical: 1,
            },
            colr_primaries: 1,
            colr_transfer_function: 1,
            colr_matrix: 1,
            ticks_per_frame: 2,
            bitDepth: 8,
            bitsPerPixel: 12,
            colorPrimaries: 'BT709',
            file: [
              {
                id: 'VX-72',
                path: 'VX-72.mov',
                uri: ['http://localhost:6006/sample.mov'],
                state: 'CLOSED',
                size: 8198531,
                hash: '4bdf9a37862add10644a45add14ae6a0f1f95958',
                timestamp: '2022-07-14T21:03:56.445+0000',
                refreshFlag: 1,
                storage: 'VX-1',
                metadata: {},
              },
            ],
            id: 'VX-153',
            metadata: [
              {
                key: 'creation_time',
                value: '2022-07-14T21:03:54.000000Z',
              },
              {
                key: 'componentOriginalFilename',
                value: 'VX-72.mov',
              },
              {
                key: 'handler_name',
                value: 'VideoHandler',
              },
              {
                key: 'vendor_id',
                value: 'FFMP',
              },
              {
                key: 'timecode',
                value: '00:00:01;12',
              },
            ],
            codec: 'h264',
            timeBase: {
              numerator: 1,
              denominator: 30000,
            },
            itemTrack: 'V1',
            essenceStreamId: 0,
            bitrate: 10410023,
            numberOfPackets: 180,
            extradata:
              '014D0029FFE1001C274D0029898B603C0113F2E02D4040404C0C0017700005DC17BDF05001000428EE1F20',
            pid: 1,
            duration: {
              samples: 180180,
              timeBase: {
                numerator: 1,
                denominator: 30000,
              },
            },
            profile: 77,
            level: 41,
            edl: {
              timeScale: {
                numerator: 1,
                denominator: 1000,
              },
              entry: [
                {
                  start: 1001,
                  length: 6006,
                  mediaRate: 65536,
                },
              ],
            },
            startTimestamp: {
              samples: 0,
              timeBase: {
                numerator: 1,
                denominator: 30000,
              },
            },
          },
        ],
      },
    ],
    id: 'VX-56',
  }
}
